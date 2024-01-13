
import { PageGroup } from "@/gql/graphql";
import { getContentfulIdOrEmpty } from "@/utils/contentful";
import { getNavigationData } from "@/utils/contentful/navigationDataFetch";
import { 
  getByContentfulId, 
  getColumns, 
  getEndPages, 
  getMiddlePages, 
  getTopics 
} from "@/utils/contentful/parseNavigationData";



// TODO: this actually is n pow 3, there should be a way to lessen complexity
// TODO: maybe use recursion
export async function generateStaticParams(){
  const [pages, topics, middlePages] = await getNavigationData()

  const getTopicById = getByContentfulId(topics)
  const getMiddlePagesById = getByContentfulId(middlePages)

  const flatSlugs = pages.flatMap(pageOrGroup =>{
    const {__typename, slug: mainSlug } = pageOrGroup
  
    if(__typename === 'Page')
      return [{
        slug:[ mainSlug!]
      }]

    const middlePages = getColumns(pageOrGroup as PageGroup)
      .flatMap(getTopics)
      .map(getContentfulIdOrEmpty)
      .map(getTopicById)
      .flatMap(getMiddlePages)
      .map(getContentfulIdOrEmpty)
      .map(getMiddlePagesById)
     
    return middlePages.flatMap(middlePage => {
      const { slug } = middlePage

      return getEndPages(middlePage)
        .map((endPage)=>({
          slug: [mainSlug!, slug!, endPage.slug!]
        }))
        .concat([{slug:[mainSlug!, slug!]}])
    })
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