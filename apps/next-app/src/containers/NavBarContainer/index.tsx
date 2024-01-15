import { indexBy } from "ramda";
import { PacificoNavbarItem } from "ui-material";
import { Page, PageGroup } from "@/gql/graphql";
import { getContentfulIdOrEmpty } from "@/utils/contentful";
import { getNavigationData } from "@/utils/contentful/navigationDataFetch";
import { 
  getColumns, 
  getTopics, 
  getMiddlePages, 
  getByContentfulId 
} from "@/utils/contentful/parseNavigationData";

import { LayoutNavbar } from "@/components/LayoutNavbar";

import { resolveMiddlePage, resolveSlugPrefix } from "./utils";
import pino from "pino";
import { globalLogs } from "./config";
import { RequestOptions } from "@/services/GraphQLCLient";
import { asyncPipe } from "@/utils/common";


const logger =  pino(pino.destination({
  dest: './debug.log',
  sync: true
}))


//TODO: request logger should be a proxy in fetch

const loggerRequests = pino(pino.destination({
  dest: './requests.log',
  sync: true
}))

const getNavigationDataWrapper = async (options?: RequestOptions)=>{
  const navigationData = await getNavigationData(options)

  if(globalLogs)
    loggerRequests.info({navigationData})

  return navigationData

}

type NavData = Awaited<ReturnType<typeof getNavigationDataWrapper>>;

// TODOL this should be a strategy pattern, separting
// the stragty for fetchin and the strategy for parsing
function parseNavigationData(data:NavData ): PacificoNavbarItem[]{
  const [pagesOrGroup, topics, middlePages] = data
  const slugPrefix = resolveSlugPrefix()

  const middlePagesById = indexBy(getContentfulIdOrEmpty, middlePages)

  const getTopicsById = getByContentfulId(topics)

  return pagesOrGroup.map((pageOrGroup)=>{
    const { title = '', slug, externalHref } = pageOrGroup as (PageGroup & Page)

    const baseSlug = `${slugPrefix}${slug}`

    const transformMiddlePage = resolveMiddlePage(middlePagesById, baseSlug)
    
    return({
      label: title!,
      url: externalHref ?? baseSlug,
      items: getColumns(pageOrGroup).map((column)=>({
        groups: getTopics(column)
          .map(getContentfulIdOrEmpty)
          .map(topicId => {
            const topicWithMiddlePage = getTopicsById(topicId)

            return({
              label: topicWithMiddlePage.title ?? '',
              items: getMiddlePages(topicWithMiddlePage)
                .map(getContentfulIdOrEmpty)
                .map(transformMiddlePage)
          })})
      }))
    })
  })
}

parseNavigationData.withLogs = (data: NavData)=>{
  const parsedData  = parseNavigationData(data);

  if(globalLogs)
    logger.info({parsedData})

  return parsedData
}


// TODO: create a way to get config of petition via keys
export default async function NavbarContainer(){
  const parsedData = await asyncPipe<RequestOptions, PacificoNavbarItem[]>(
    getNavigationDataWrapper, 
    parseNavigationData
  )()

  return <LayoutNavbar items={parsedData} />
}