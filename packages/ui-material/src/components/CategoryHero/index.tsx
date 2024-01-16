import { Box, BoxProps, ButtonProps, Container, Typography } from "@mui/material";
import { CTA as Cta } from "../CTA";
import { ArrowForwardIos } from "@mui/icons-material";
import { ReactNode } from "react";

export interface CategoryHeroProps extends BoxProps{
  ctaProps?: Omit<ButtonProps, 'children'>;
  ctaText: string;
  subTitleText?: string;
  title?: string;
  ctaHref?: string;
  image: ReactNode;
}

export const CategoryHero  = ({
  ctaProps, 
  ctaText,
  subTitleText = '',
  title = '',
  ctaHref,
  image,
  ...props
}:Readonly<CategoryHeroProps>) =>{
  return(<Box 
    color="white" 
    bgcolor="primary.main"
    paddingBlock={8}
    {...props}
  >
    <Container maxWidth='md'>
      <Box display='flex' justifyContent='space-between' >
        <Box width="60%">
          <Typography 
            variant="body2"
            marginBlockEnd={1}  
            dangerouslySetInnerHTML={{
              __html:subTitleText
            }}
          />
          <Typography 
            fontWeight='bolder' 
            variant="h4" 
            component="h1"
            marginBlockEnd={2} 
            dangerouslySetInnerHTML={{
              __html:title
            }}
          />
          <Cta 
            sx={{
              minWidth: '16rem',
              borderRadius: '3rem',
              paddingBlock: 2,
              textTransform: 'none',
              fontWeight: 'bolder'
            }} 
            href={ctaHref}
            endIcon={<ArrowForwardIos />} 
            {...ctaProps}
          >
            {ctaText}
          </Cta>
        </Box>
        {image}
      </Box>
    </Container>
  </Box>)
}