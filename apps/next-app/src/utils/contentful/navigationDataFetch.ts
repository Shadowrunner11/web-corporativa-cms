import { MiddlePage, Topic, WebDataContentItem } from "@/gql/graphql";
import { contentfulGqlFetch } from ".";
import getWebData from 'raw-loader!/src/graphqlDocuments/getWebData.gql'
import getTopics from 'raw-loader!/src/graphqlDocuments/getTopics.gql'
import queryGetMiddlePages from 'raw-loader!/src/graphqlDocuments/getMiddlePages.gql'
import { globalEnvService, graphqlClient } from "@/modules";

const fetchWebData = async ()=>{
  const { data: mainData } = await graphqlClient.request(getWebData, {
    variables:{
      id: globalEnvService.getEnvOrThrow('WEB_ID')
    }
  })

  return mainData
    .data
    .webData
    .contentCollection
    .items as WebDataContentItem[]
}

export const getNavigationData = ()=> Promise.all([
  fetchWebData(),
  contentfulGqlFetch<Topic>('topicCollection', getTopics),
  contentfulGqlFetch<MiddlePage>('middlePageCollection', queryGetMiddlePages)
])