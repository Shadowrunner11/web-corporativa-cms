import { CategoryHero as CategoryHeroType} from "@/gql/graphql";
import { fetchContentfulGql } from "@/utils/contentful";
import { CategoryHero } from "ui-material";

import getCategoryHeroById from 'raw-loader!./getCategoryHeroById.gql'
import Image from "next/image";
import { Box } from "@mui/material";

export interface EntryComponentProps{
  id: {toString():string};
  meta?: Record<string, unknown>
}

export async function CategoryHeroContainer({ id }: Readonly<EntryComponentProps>) {
  const {
    cta, 
    sxStyles, 
    subtitle, 
    title,
    image
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
    image={<Box position='relative'>
        <Image
          style={{
            right: 0,
            position: 'absolute'
          }} 
          width={Number(image?.width ?? 200)} 
          src={image?.url ?? ''} 
          alt={image?.description ?? ''} 
          height={Number(image?.height ?? 100)}
        />
      </Box>
    }
  />)
}