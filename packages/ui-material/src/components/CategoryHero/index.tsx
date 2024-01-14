import { Box, BoxProps, ButtonProps, Typography } from "@mui/material";
import { CTA as Cta } from "../CTA";

export interface CategoryHeroProps extends BoxProps{
  ctaProps?: Omit<ButtonProps, 'children'>;
  ctaText: string;
  subTitleText?: string;
  title?: string
}

export const CategoryHero  = ({
  ctaProps, 
  ctaText,
  subTitleText = '',
  title = '',
  ...props
}:Readonly<CategoryHeroProps>) =>{
  return(<Box {...props}>
    <Typography dangerouslySetInnerHTML={{
      __html:subTitleText
    }}/>
    <Typography dangerouslySetInnerHTML={{
      __html:title
    }}/>
    <Cta {...ctaProps}>
      {ctaText}
    </Cta>
  </Box>)
}