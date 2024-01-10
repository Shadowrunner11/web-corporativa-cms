import { Box, BoxProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import { HeaderStrip } from "./HeaderStrip";

export interface AlertStripProps extends PropsWithChildren<BoxProps> {
  headerContent?: ReactNode;
  header?: ReactNode;
}

export default function AlertStrip({
  headerContent,
  children,
  header,
  ...props
}: Readonly<AlertStripProps>) {
  return (
    <Box display="grid" gridTemplateRows={"0.5rem 1rem 1rem 1fr"} {...props}>
      {header}
      {headerContent && (
        <HeaderStrip
          containerProps={{
            gridRow: "2 / 1 span",
            sx: {
              transform: "translateX(-0.5rem)",
            },
          }}
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            p: 0.1,
            px: 2,
            fontWeight: "bolder",
            fontSize: ".9em",
            borderRadius: ".3rem .3rem .3rem 0",
          }}
        >
          {headerContent}
        </HeaderStrip>
      )}
      <Box gridRow={"4 / 1 span"} p={2}>
        {children}
      </Box>
    </Box>
  );
}
