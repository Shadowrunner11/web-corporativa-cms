import { MiddlePage, Topic, WebDataContentItem } from "@/gql/graphql";
import { fetchContentfulCollectionGql, fetchContentfulGql } from ".";
import getWebData from 'raw-loader!/src/graphqlDocuments/getWebData.gql'
import getTopics from 'raw-loader!/src/graphqlDocuments/getTopics.gql'
import queryGetMiddlePages from 'raw-loader!/src/graphqlDocuments/getMiddlePages.gql'
import { globalEnvService } from "@/modules";
import { getWebContentCollection } from "./parseNavigationData";
import { RequestInit } from "@/services/FetchClient";
import { RequestOptions } from "@/services/GraphQLCLient";

const fetchWebData = async (fetchClientOptions?: RequestInit)=>{
  const data = await fetchContentfulGql('webData', getWebData, {
    fetchClientOptions,
    variables:{
      id: globalEnvService.getEnvOrThrow('WEB_ID')
    }
  })

  return getWebContentCollection(data)
}

export const getNavigationData = (options?: RequestOptions)=> Promise.all([
  fetchWebData(options?.fetchClientOptions),
  fetchContentfulCollectionGql<Topic>('topicCollection', getTopics, options),
  fetchContentfulCollectionGql<MiddlePage>('middlePageCollection', queryGetMiddlePages, options)
])