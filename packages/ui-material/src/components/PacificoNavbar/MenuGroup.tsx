import { Link, LinkProps, Stack, Typography } from "@mui/material"
import { Group } from "./types"
import NavSubmenu from "../NavSubmenu"
import { FC } from "react"

export interface MenuGroupProps extends Group{
    LinkComponent?: FC<LinkProps>
}

const MenuGroup = ({items, label, sxItems, sxLabels, LinkComponent = Link}: MenuGroupProps)=>(
  <Stack gap={2}>
    <Typography sx={sxLabels}>
      {label}
    </Typography>
    {
      items.map(({label, url, items})=> items?.length ? (
        <NavSubmenu
          sx={sxItems}
          key={label} 
          label={label} 
          items={items.concat([{url, label: 'Ver categoria'}]).map(({url, label})=>({href: url, children: label}))} 
        />
      ) :(
        <LinkComponent key={label} href={url} sx={sxItems}>
          {label}
        </LinkComponent>
      ))
    }
  </Stack>
)

export default MenuGroup