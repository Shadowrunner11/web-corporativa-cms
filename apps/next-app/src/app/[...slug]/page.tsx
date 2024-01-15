
import { PageGroup, Entry } from "@/gql/graphql";
import { getContentfulIdOrEmpty, getType } from "@/utils/contentful";
import { getNavigationData } from "@/utils/contentful/navigationDataFetch";
import { 
  getByContentfulId, 
  getColumns, 
  getEndPages, 
  getItemsOrArray, 
  getMiddlePages, 
  getTopics 
} from "@/utils/contentful/parseNavigationData";
import { containers, getBySlug } from "./utils";
import { Box } from "@mui/material";


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
    slug: string[]
  }
}

export default async function Page({params: {slug}}: Readonly<PageProps>){
  const contentData = getItemsOrArray<Entry>('contentCollection')(await getBySlug(slug))
    .map((content)=>({id: getContentfulIdOrEmpty(content), componentType:getType(content)}))

  return (<Box sx={{
    marginTop: 8
  }}>
    {contentData.map(({id, componentType})=> {
      const Component = containers[componentType]

      return <Component key={id} id={id}/>
    })}
  </Box>)
}