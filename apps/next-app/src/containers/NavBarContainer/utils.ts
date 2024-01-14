import { MiddlePage } from "@/gql/graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import queryGetPages from 'raw-loader!./getPages.gql'
import queryGetColumns from 'raw-loader!./getColumns.gql'
import queryGetTopics from 'raw-loader!../../graphqlDocuments/getTopics.gql'
import queryGetMiddlePages from 'raw-loader!../../graphqlDocuments/getMiddlePages.gql'
import { withLogger } from "@/utils/common";
import { fetchContentfulCollectionGql } from "@/utils/contentful";
import { getEndPages } from "@/utils/contentful/parseNavigationData";
import { globalCacheEnvService } from "@/modules";



export const resolveMiddlePage = (middlePagesById: Record<string, MiddlePage>, basePath = '')=>{
  const transformer = (middlePageId: string)=>{
    const middlePageData = middlePagesById[middlePageId] ?? {}
    const url = `${basePath}/${middlePageData.slug}`

    return {
      label: middlePageData.title ?? '',
      url: middlePageData.externalHref ?? url,
      items: getEndPages(middlePageData)
        .map((childrenPage)=>({
          label: childrenPage?.title ?? '',
          url: childrenPage?.externalHref ?? `${url}/${childrenPage?.slug}`
        }))
    }
  }

  transformer.withLogs = withLogger(transformer)

  return transformer
}

export const fetchNavigationData = async ()=> await Promise.all([
  fetchContentfulCollectionGql('pageCollection', queryGetPages),
  fetchContentfulCollectionGql('columnsCollection', queryGetColumns),
  fetchContentfulCollectionGql('topicCollection', queryGetTopics),
  fetchContentfulCollectionGql('middlePageCollection', queryGetMiddlePages)
])

fetchNavigationData.withLogs = withLogger(fetchNavigationData)

export const resolveSlugPrefix = ()=>{
  const basePath = globalCacheEnvService.getEnv('BASE_PATH');

  switch(globalCacheEnvService.getEnv('LINK_STRATEGY')){
    case 'relative': 
      return './'
    default:
      return basePath?  `${basePath}/` : '/'
  }
}