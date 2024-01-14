
import { Card, CardHeader, CardContent, CardActions, Typography, CardMedia, Link } from '@mui/material';

export interface TinyCardExampleProps{
  headerTitle: string;
  imgURL: string;
  contentText: string;
  linkText: string;
  href: string;
  isHighlited?: boolean,
}

export function TinyCardExample({
  contentText,
  headerTitle,
  imgURL,
  linkText,
  href,
  isHighlited,
}:Readonly<TinyCardExampleProps>) {
  return (
    <Card sx={{
      display: 'grid',
      width: '9.25rem',
      height: '12.5rem',
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
          backgroundColor: isHighlited? 'secondary.main' :'primary.main',
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
        }} align='center' variant="body1">
          {contentText}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: 'center'
      }}>
        <Link href={href}>
          {linkText}
        </Link>
      </CardActions>
    </Card>
  );
}
