import { PromotionCard } from "@/components/PromotionCard";
import { CardGeneralProps } from "@/components/TinyCard";
import { Box, Container, Typography } from "@mui/material";

interface PromotionsContainerProps{
  normalText: string;
  bolderText?: string;
  cards: (CardGeneralProps & {id?: string})[]
}

export const PromotionsContainer = ({
  normalText, 
  bolderText,
  cards,
}:PromotionsContainerProps)=>{
  return(
    <Box
      sx={{
        paddingBlock:2,
        paddingInline:3,
        minHeight: '100vh',
        backgroundColor: 'white'
      }} 
      component="section"  
    >
      <Typography 
        sx={{
          marginInline: 'auto',
          textAlign: 'center',
          fontSize: '3em'
        }} 
        color="primary.main"
      >
        <strong>
          {bolderText}
        </strong>
        {' '}
        {normalText}
      </Typography>
      <Box paddingBlock={4} gap={3} display='flex'flexWrap='wrap' justifyContent='center'>
        {
          cards.map((props)=><PromotionCard 
            {...props} 
            key={props.id}
          />)
        }
      </Box>
    </Box>
  )
}