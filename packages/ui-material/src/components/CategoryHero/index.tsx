import { Box, BoxProps, ButtonProps, Container, Typography } from "@mui/material";
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
  return(<Box 
    color="white" 
    bgcolor="primary.main"
    paddingBlock={4}
    {...props}
  >
    <Container maxWidth='sm'>
      <Box>
        <Typography 
          variant="body2" 
          dangerouslySetInnerHTML={{
            __html:subTitleText
          }}
        />
        <Typography 
          fontWeight='bolder' 
          variant="h4" 
          component="h1"
          paddingBlockEnd={1} 
          dangerouslySetInnerHTML={{
            __html:title
          }}
        />
        <Cta {...ctaProps}>
          {ctaText}
        </Cta>
      </Box>
    </Container>
  </Box>)
}