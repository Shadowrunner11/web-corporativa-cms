import { MiddlePage } from "@/gql/graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import queryGetPages from 'raw-loader!./getPages.gql'
import queryGetColumns from 'raw-loader!./getColumns.gql'
import queryGetTopics from 'raw-loader!../../graphqlDocuments/getTopics.gql'
import queryGetMiddlePages from 'raw-loader!../../graphqlDocuments/getMiddlePages.gql'
import { withLogger } from "@/utils/common";
import { contentfulGqlFetch, getContentfulIdOrEmpty } from "@/utils/contentful";



export const resolveMiddlePage = (middlePagesById: Record<string, MiddlePage>, basePath = '')=>{
  const transformer = (middlePage: Maybe<MiddlePage>)=>{
    const middlePageData = middlePagesById[getContentfulIdOrEmpty(middlePage)] ?? {}
  
    return {
      label: middlePageData.title ?? '',
      url: `${basePath}/${middlePageData.slug}`,
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