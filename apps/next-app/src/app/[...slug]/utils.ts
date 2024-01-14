import { fetchContentfulCollectionGql } from '@/utils/contentful'
import getPageBySlug from 'raw-loader!./getPageBySlug.gql'
import getMiddlePageBySlug from 'raw-loader!./getMiddlePageBySlug.gql'
import getEndPageBySlug from 'raw-loader!./getEndPageBySlug.gql'
import { CategoryHeroContainer, EntryComponentProps } from '@/containers/CategoryHero'


export const resolveSlug = (completeSlug: string)=> completeSlug.split('/').reverse()[0]

// TODO: gql should use fragments
export const getPageLevel = (completeSlugLength: number) => {
  switch(completeSlugLength){
    case 1:
      return {request: getPageBySlug, collectionName: 'pageCollection'}
    case 2:
      return {request: getMiddlePageBySlug, collectionName: 'middlePageCollection'}
    case 3:
      return {request: getEndPageBySlug, collectionName: 'endPageCollection'}
    default:
      throw new Error('too much nesting')
  }
}

export const getBySlug = async <T = unknown> (completeSlug: string[])=>{
  const [slug] = [...completeSlug].reverse()

  const { collectionName, request } = getPageLevel(completeSlug.length)

  const [page] = await fetchContentfulCollectionGql<T>(collectionName,request, {
    variables: {
      slug
    }
  })

  return page
}

export const containers : Record<string, (props: EntryComponentProps)=> Promise<JSX.Element>>= {
  'CategoryHero': CategoryHeroContainer
}