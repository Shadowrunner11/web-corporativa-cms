import { indexBy } from "ramda";

import { PageGroup } from "@/gql/graphql";
import { getContentfulIdOrEmpty } from "@/utils/contentful";
import { getNavigationData } from "@/utils/contentful/navigationDataFetch";


export async function generateStaticParams(){
  const [pages, topics, middlePages] = await getNavigationData()

  const topicsById = indexBy(getContentfulIdOrEmpty, topics)
  const middlePagesById = indexBy(getContentfulIdOrEmpty, middlePages)

  const flatSlugs = pages.flatMap(pageOrGroup =>{
    const {__typename, slug: mainSlug } = pageOrGroup
  
    if(__typename === 'Page')
      return [{
        slug:[ mainSlug!]
      }]

    const pageGroup = pageOrGroup as PageGroup

    const middlePages = pageGroup.columnsCollection?.items
      .flatMap(
        (column)=>column?.topicsCollection?.items
          .flatMap((topic)=>topicsById[getContentfulIdOrEmpty(topic)].itemsCollection?.items
            .map(middlePage => middlePagesById[getContentfulIdOrEmpty(middlePage)]) ?? []
          ) ?? []
      ) ?? []
    
    return middlePages.map(middleware => ({slug:[mainSlug!, middleware.slug!]}))
  })  

  return flatSlugs
}


interface PageProps{
  params:{
    slug: string
  }
}

export default function Page({params: {slug}}: Readonly<PageProps>){
  return <div>{slug}</div>
}