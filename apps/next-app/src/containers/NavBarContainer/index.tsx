import { LayoutNavbar } from "@/components/LayoutNavbar";
import { PacificoNavbarItem } from "ui-material";
import { indexBy } from "ramda";

import { NavigationCollections } from "./types";
import { fetchNavigationData, getIdOrEmpty, resolveMiddlePage } from "./utils";


async function getNavigationData(): Promise<PacificoNavbarItem[]>{
  const [page, columns, topics, middlePages] : NavigationCollections = await fetchNavigationData()

  const middlePagesById = indexBy(getIdOrEmpty, middlePages)
  const topicsById = indexBy(getIdOrEmpty, topics)
  const columnsById = indexBy(getIdOrEmpty, columns);

  const transformMiddlePage = resolveMiddlePage(middlePagesById)
  
  return page.map(({slug, title, columnsCollection})=>({
    label: title ?? '',
    url: slug ?? undefined,
    items: columnsCollection?.items?.map((column)=> ({ 
      groups: columnsById[getIdOrEmpty(column)]?.topicsCollection?.items.map((topic)=>({
        label: topicsById[getIdOrEmpty(topic)].title ?? '',
        items: topicsById[getIdOrEmpty(topic)].itemsCollection?.items.map(transformMiddlePage) ?? []
      })) ?? []
    }))
  }))
}

export default async function NavbarContainer(){
  const data = await getNavigationData();

  return <LayoutNavbar items={data} />
}