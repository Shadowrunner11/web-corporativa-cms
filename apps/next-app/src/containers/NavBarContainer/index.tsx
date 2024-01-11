import { LayoutNavbar } from "@/components/LayoutNavbar";
import { Columns, MiddlePage, Page, PageCollection, Topic } from "@/gql/graphql";
import { graphqlClient } from "@/modules";

import queryGetPages from 'raw-loader!./getPages.gql'
import queryGetColumns from 'raw-loader!./getColumns.gql'
import queryGetTopics from 'raw-loader!./getTopics.gql'
import queryGetMiddlePages from 'raw-loader!./getMiddlePages.gql'

import { PacificoNavbarItem } from "ui-material";
import { indexBy, pathOr } from "ramda";
import { Maybe } from "graphql/jsutils/Maybe";


async function contentfulGqlFetch<T = any>(documentName: string, query: string): Promise<T[]>{
  const { data: responseData } = await graphqlClient.request(query)

  return responseData.data[documentName].items
}


type NavigationCollections = [Page[], Columns[], Topic[], MiddlePage[]]


const getIdOrEmpty = pathOr<string>('', ['sys', 'id'])

const resolveMiddlePage = (middlePagesById: Record<string, MiddlePage>)=>
  (middlePage: Maybe<MiddlePage>)=>{
    const middlePageData = middlePagesById[getIdOrEmpty(middlePage)] ?? {}
  
    return {
      label: middlePageData.title ?? '',
      url: middlePageData.slug ?? undefined,
      items: middlePage?.childrenPagesCollection?.items.map((childrenPage)=>({
        label: childrenPage?.title ?? '',
        url: childrenPage?.slug ?? undefined
      }))
    }
  }

async function getNavigationData(): Promise<PacificoNavbarItem[]>{
  const [page, columns, topics, middlePages] : NavigationCollections = await Promise.all([
    contentfulGqlFetch('pageCollection', queryGetPages),
    contentfulGqlFetch('columnsCollection', queryGetColumns),
    contentfulGqlFetch('topicCollection', queryGetTopics),
    contentfulGqlFetch('middlePageCollection', queryGetMiddlePages)
  ])

  const middlePagesById = indexBy(getIdOrEmpty, middlePages)
  const topicsById = indexBy(getIdOrEmpty, topics)
  const columnsById = indexBy(getIdOrEmpty, columns);

  const transformMiddlePage = resolveMiddlePage(middlePagesById)
  
  return page.map(({slug, title, columnsCollection})=>({
    label: title ?? '',
    url: slug ?? undefined,
    items: columnsCollection?.items?.map((column)=> ({ 
      groups: columnsById[getIdOrEmpty(column)]?.topicsCollection?.items.map((topic)=>({
        label: topicsById[getIdOrEmpty(topic)].title ?? '',
        items: topicsById[getIdOrEmpty(topic)].itemsCollection?.items.map(transformMiddlePage) ?? []
      })) ?? []
    }))
  }))
}

export default async function NavbarContainer(){
  const data = await getNavigationData()

  return <LayoutNavbar items={data} />
}