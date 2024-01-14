import { MiddlePage, Topic, WebDataContentItem } from "@/gql/graphql";
import { fetchContentfulCollectionGql, fetchContentfulGql } from ".";
import getWebData from 'raw-loader!/src/graphqlDocuments/getWebData.gql'
import getTopics from 'raw-loader!/src/graphqlDocuments/getTopics.gql'
import queryGetMiddlePages from 'raw-loader!/src/graphqlDocuments/getMiddlePages.gql'
import { globalEnvService } from "@/modules";
import { getWebContentCollection } from "./parseNavigationData";

const fetchWebData = async ()=>{
  const data = await fetchContentfulGql('webData', getWebData, {
    variables:{
      id: globalEnvService.getEnvOrThrow('WEB_ID')
    }
  })

  return getWebContentCollection(data)
}

export const getNavigationData = ()=> Promise.all([
  fetchWebData(),
  fetchContentfulCollectionGql<Topic>('topicCollection', getTopics),
  fetchContentfulCollectionGql<MiddlePage>('middlePageCollection', queryGetMiddlePages)
])