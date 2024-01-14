'use client';
import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import { CssBaseline, ThemeProvider } from "@mui/material";
import { pacificoDefaultTheme } from "ui-material";

export interface ThemeRegistry extends PropsWithChildren{
  options: any
}

export default function ThemeRegistry ({children, options}: Readonly<ThemeRegistry>){
  return (
    <AppRouterCacheProvider options={options}>
      <ThemeProvider theme={pacificoDefaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
