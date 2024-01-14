import { SxProps } from "@mui/material";

export interface SubmenuItem {
  label: string;
  url?: string;
  items?: SubmenuItem[];
}

export interface Group {
  label: string;
  items: SubmenuItem[];
  sxItems?: SxProps;
  sxLabels?: SxProps;
}

export interface Column {
  groups: Group[];
}

export interface MenuItem {
  id: string;
  label: string;
  url?: string;
  modalContent?: Column[];
}