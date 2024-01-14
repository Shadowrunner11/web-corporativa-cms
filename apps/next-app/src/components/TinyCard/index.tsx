
import { Card, CardHeader, CardContent, CardActions, Typography, CardMedia, Link as MUILink, CardProps } from '@mui/material';
import Link from 'next/link';
import styles from './tinycard.module.css'
import clsx from 'clsx'
import { HTMLAttributes } from 'react';

export interface CardGeneralProps{
  headerTitle: string;
  imgURL: string;
  contentText: string;
  linkText?: string;
  href: string;
}

export interface TinyCardProps<T = unknown> extends CardGeneralProps, HTMLAttributes<T>{
  isHighlited?: boolean,
}

export function TinyCard({
  contentText,
  headerTitle,
  imgURL,
  linkText = "Cotiza aqui",
  href,
  isHighlited,
  ...props
}:Readonly<TinyCardProps>) {
  return (
    <Card
      {...props}
      className={clsx('card',{
        [styles.vibrate]: isHighlited,
      })} 
      component={Link} 
      href={href} 
      sx={{
        display: 'grid',
        width: '9.25rem',
        minHeight: '12.5rem',
        transition: 'all 300ms ease-in-out',
        '&:hover':{
          transform: 'scale(0.95)',
          '& .MuiCardHeader-root':{
            backgroundColor: 'secondary.main'
          }
        }
      }}>
      <CardHeader  
        sx={{
          backgroundColor: `${isHighlited? 'secondary' : 'primary'}.main`,
          color: 'white',
          padding: 0,
          display: 'grid',
          placeItems: 'center'
        }}
        titleTypographyProps={{
          sx:{
            fontSize: '1em',
            paddingBlock: 0.2,
            textAlign: 'center'
          }
        }} 
        title={headerTitle} 
      />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        paddingBlockEnd: 0
      }}>
        <CardMedia 
          component="img" 
          height="48" 
          image={imgURL}
          sx={{
            width: 'auto',
            margin: 'auto'
          }} 
        />
        <Typography sx={{
          fontWeight: 'bold',
          color: '#455555',
          }}
          align='center' 
          variant="body1"  
        >
          {contentText}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: 'center'
      }}>
        <MUILink sx={{textAlign: 'center'}} component={'p'}>
          {linkText}
        </MUILink>
      </CardActions>
    </Card>
  );
}
