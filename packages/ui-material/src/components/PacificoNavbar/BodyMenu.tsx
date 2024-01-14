import { Box, BoxProps, Stack } from "@mui/material";
import { Column } from "./types";
import  MenuGroup from "./MenuGroup";
import { sxItems, sxLabels } from "./styles";

export interface BodyMenuProps extends BoxProps{
    columns: Column[];
  }
  
const BodyMenu= ({columns, ...props}: BodyMenuProps)=>(
  <Box {...props}>
    {
      columns.map(({groups}, index)=>(
        <Stack key={`column-${index}`} gap={2}>
          {
            groups.map(({label, items})=>(
              <MenuGroup key={`group-${label}`} label={label} items={items} sxItems={sxItems} sxLabels={sxLabels}/>
            ))
          }
        </Stack>
      ))
    } 
    </Box>
  )

export default BodyMenu