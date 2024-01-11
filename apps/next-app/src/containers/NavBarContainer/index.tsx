import { LayoutNavbar } from "@/components/LayoutNavbar";
import { Columns, MiddlePage, Page, PageCollection, Topic } from "@/gql/graphql";
import { graphqlClient } from "@/modules";

import queryGetPages from 'raw-loader!./getPages.gql'
import queryGetColumns from 'raw-loader!./getColumns.gql'
import queryGetTopics from 'raw-loader!./getTopics.gql'
import queryGetMiddlePages from 'raw-loader!./getMiddlePages.gql'

import { PacificoNavbarItem } from "ui-material";
import { indexBy, path, prop } from "ramda";


function transformContenfullItemsToPageItems(contenfullItems: Page[]): PacificoNavbarItem[]{
  return contenfullItems.map(({title, slug, columnsCollection})=>({
    label: title ?? '',
    url: columnsCollection? `/${slug}` : undefined,
    items: columnsCollection?.items?.map((column)=>({
      groups: column?.topicsCollection?.items?.map((topic)=>({
        label: topic?.title ?? '',
        items: topic?.itemsCollection?.items?.map((subpage)=>({
          label: subpage?.title ?? '',
          url: `/${slug}/${subpage?.slug}`,
          items: subpage?.childrenPagesCollection?.items?.map((endPage)=>({
            label: endPage?.title ?? '',
            url: `/${slug}/${subpage?.slug}/${endPage?.slug}`
          }))
        })) ?? []
      })) ?? []
    }))
  }))
}

async function contentfulGqlFetch<T = any>(documentName: string, query: string): Promise<T[]>{
  const { data: responseData } = await graphqlClient.request(query)

  return responseData.data[documentName].items
}


type NavigationCollections = [Page[], Columns[], Topic[], MiddlePage[]]

async function getNavigationData(): Promise<PacificoNavbarItem[]>{
  const [page, columns, topics, middlePages] : NavigationCollections = await Promise.all([
    contentfulGqlFetch('pageCollection', queryGetPages),
    contentfulGqlFetch('columnsCollection', queryGetColumns),
    contentfulGqlFetch('topicCollection', queryGetTopics),
    contentfulGqlFetch('middlePageCollection', queryGetMiddlePages)
  ])

  const getId = path<string>(['sys', 'id'])
  const middlePagesById = indexBy(getId, middlePages)
  const topicsById = indexBy(getId, topics.map(({itemsCollection})=> itemsCollection?.items))
  const columnsById = indexBy(getId, columns);

  return page.map(({slug, title, sys: { id }, columnsCollection})=>({
    label: title,
    url: slug,
    items: columnsCollection?.items?.map((column)=> columnsById[column?.sys.id ?? ''])
  }))
}

export default async function NavbarContainer(){
  const data = await fetchPages()

  return <LayoutNavbar items={data} />
}