import { CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import { pacificoDefaultTheme } from 'ui-material'
declare global{
  interface Window{
    __MUI_THEME__: unknown;
  }
}


export const ThemeWrapper = ({ children }: PropsWithChildren) =>{ 
  window.parent.window.__MUI_THEME__ = pacificoDefaultTheme;

  return(
    <ThemeProvider theme={pacificoDefaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export const withTheme = (Story: ()=> JSX.Element)=>(
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
)
