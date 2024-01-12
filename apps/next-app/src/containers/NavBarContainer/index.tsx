import { LayoutNavbar } from "@/components/LayoutNavbar";
import { PacificoNavbarItem } from "ui-material";
import { indexBy } from "ramda";

import { resolveMiddlePage } from "./utils";
import { getContentfulIdOrEmpty } from "@/utils/contentful";
import { getNavigationData } from "@/utils/contentful/navigationDataFetch";
import { Page, PageGroup } from "@/gql/graphql";


async function parseNavigationData(): Promise<PacificoNavbarItem[]>{
  const [pagesOrGroup, topics, middlePages] = await getNavigationData()

  const middlePagesById = indexBy(getContentfulIdOrEmpty, middlePages)
  const topicsById = indexBy(getContentfulIdOrEmpty, topics)
 
  

  return pagesOrGroup.map((pageOrGroup)=>{
    const { title = '', slug, columnsCollection, externalHref } = pageOrGroup as (PageGroup & Page)

    const transformMiddlePage = resolveMiddlePage(middlePagesById, `/${slug}`)
    
    return({
      label: title!,
      url: externalHref ?? `/${slug}`,
      items: columnsCollection?.items.map((column)=>({
        groups: column?.topicsCollection?.items
          .map(topic => {
            const topicWithMiddlePage = topicsById[getContentfulIdOrEmpty(topic)]

            return({
              label: topicWithMiddlePage.title ?? '',
              items: topicWithMiddlePage.itemsCollection?.items
                .map(transformMiddlePage) ?? []
          })}) ?? []
      }))
    })
  })
}

export default async function NavbarContainer(){
  const data = await parseNavigationData();

  return <LayoutNavbar items={data} />
}