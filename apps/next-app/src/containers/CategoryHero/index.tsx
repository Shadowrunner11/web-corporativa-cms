import { CategoryHero as CategoryHeroType} from "@/gql/graphql";
import { fetchContentfulGql } from "@/utils/contentful";
import { CategoryHero } from "ui-material";

import getCategoryHeroById from 'raw-loader!./getCategoryHeroById.gql'

export interface EntryComponentProps{
  id: {toString():string};
  meta?: Record<string, unknown>
}

export async function CategoryHeroContainer({ id }: Readonly<EntryComponentProps>) {
  const {
    cta, 
    sxStyles, 
    subtitle, 
    title
  } = await fetchContentfulGql<CategoryHeroType>(
    'categoryHero', 
    getCategoryHeroById ,
    {
      variables:{
        id: id.toString()
      }
    }
  )

  return (<CategoryHero 
    ctaText={cta?.text ?? ''} 
    sx={sxStyles} 
    title={title!}
    subTitleText={subtitle!}
  />)
}