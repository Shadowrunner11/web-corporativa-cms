import { dataProvider } from "@/modules";
import { SectionResponse } from "@/services/ContenfulCMSProvider";
import { Box, Typography } from "@mui/material";
import HeroBannerImg from '../../public/Banner_propuesta_degrade.webp'
import { TinyCard } from "@/components/TinyCard";

export default async function HeroContainer(){
  const {response:{data}} = await dataProvider
    .getOne<SectionResponse>('ZxmtOCRcEFBRtZBdL0g8i', {requestName: 'section'})

  return (
    <Box
      component='section' 
      sx={{
        backgroundImage: `url(${HeroBannerImg.src})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '20rem',
        backgroundClip: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        p:2
      }}
    >
      <Typography sx={{
        paddingBlock: 3,
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '1.8em'
      }}>
        {data.title}
      </Typography>
      <Box 
        p={3} 
        display='flex' 
        justifyContent="center" 
        gap={2} 
        flexWrap='wrap'
      >
        {
          data.props.cards.map((props)=> <TinyCard
            {...props}
            key={props.headerTitle}
          />)
        }
      </Box>
    </Box>
  )
}