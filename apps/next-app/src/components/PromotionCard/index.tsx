'use client';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { CardGeneralProps } from "../TinyCard"
import { CTA as Cta } from "ui-material"

export const PromotionCard = ({
  contentText,
  headerTitle,
  href,
  imgURL,
  linkText
}: CardGeneralProps)=>{
  return (
    <Card sx={{
      boxShadow: '0px 6px 10px rgba(82, 112, 148, 0.14), 0px 1px 18px rgba(82, 112, 148, 0.12), 0px 3px 5px -1px rgba(82, 112, 148, 0.2)',
      minWidth: '23rem',
      display: 'grid',
      justifyItems: 'center',
      p: 3
    }}>
      <CardHeader sx={{
          color: 'primary.main',
        }} 
        title={headerTitle}
      />
      <CardContent>
        <CardMedia
          height="160"
          width="320" 
          component='img'
          image={imgURL}
        />
        <Typography textAlign='center' >
          {contentText}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent:'center'
      }}>
        <Cta
          href={href} 
        >
          {linkText}
        </Cta>
      </CardActions>
    </Card>
  )
}