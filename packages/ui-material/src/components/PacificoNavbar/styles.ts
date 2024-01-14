import { SxProps } from "@mui/material"

export const defaultMenuDrawerDefaultSx = {
  top: '4rem', 
  borderTop:'0.4rem solid',
  maxHeight: '80vh',
  overflowY: 'auto',
  width: 1,
  borderColor: 'primary.main',
  height: 'unset',
  paddingBlock: 2,
  boxShadow: '0 0.25rem 0.75rem -0.1rem rgba(1,125,167,0.27);'
}

export const sxStyleNavBarText:SxProps ={
  color:'#005c7a', "&:hover": {color: '#09c'}, textDecoration:'none'
}

export const sxItems: SxProps = {
  color:"#444",
  textDecoration: "none",
  boxShadow: "none",
  "&:hover":{
    color:"#0099CC",
  },
}

export const sxLabels: SxProps = {
  color:"#005c7a",
  fontWeight: "bold",
}