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


const logger =  pino(pino.destination({
  dest: './debug.log',
  sync: true
}))


//TODO: request logger should be a proxy in fetch

const loggerRequests = pino(pino.destination({
  dest: './requests.log',
  sync: true
}))

const getNavigationDataWrapper = async ()=>{
  const navigationData = await getNavigationData()

  if(globalLogs)
    loggerRequests.info({navigationData})

  return navigationData

}

async function parseNavigationData(): Promise<PacificoNavbarItem[]>{
  const [pagesOrGroup, topics, middlePages] = await getNavigationDataWrapper()
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

parseNavigationData.withLogs = async ()=>{
  const data  = await parseNavigationData();

  if(globalLogs)
    logger.info({data})
  return data
}

export default async function NavbarContainer(){
  const data = await parseNavigationData.withLogs();

  return <LayoutNavbar items={data} />
}