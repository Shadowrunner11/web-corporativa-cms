import { MiddlePage } from "@/gql/graphql";
import { graphqlClient } from "@/modules";
import { Maybe } from "graphql/jsutils/Maybe";

import { pathOr } from "ramda";

import queryGetPages from 'raw-loader!./getPages.gql'
import queryGetColumns from 'raw-loader!./getColumns.gql'
import queryGetTopics from 'raw-loader!./getTopics.gql'
import queryGetMiddlePages from 'raw-loader!./getMiddlePages.gql'

const withLogger = (cb: Function) => async (...args: any[])=>{
  const data = await cb(args);

  // eslint-disable-next-line no-console
  console.log(data)

  return data;
}

export async function contentfulGqlFetch<T = any>(documentName: string, query: string): Promise<T[]>{
  const { data: responseData } = await graphqlClient.request(query)

  return responseData.data[documentName].items
}

contentfulGqlFetch.withLogs = withLogger(contentfulGqlFetch)

export const getIdOrEmpty = pathOr<string>('', ['sys', 'id'])

export const resolveMiddlePage = (middlePagesById: Record<string, MiddlePage>)=>{
  const transformer = (middlePage: Maybe<MiddlePage>)=>{
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

  transformer.withLogs = withLogger(transformer)

  return transformer
}

export const fetchNavigationData = async ()=> await Promise.all([
  contentfulGqlFetch('pageCollection', queryGetPages),
  contentfulGqlFetch('columnsCollection', queryGetColumns),
  contentfulGqlFetch('topicCollection', queryGetTopics),
  contentfulGqlFetch('middlePageCollection', queryGetMiddlePages)
])

fetchNavigationData.withLogs = withLogger(fetchNavigationData)