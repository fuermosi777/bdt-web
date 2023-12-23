import React from "react";
// import "./SideNav.scss";
import { designerMenuItems } from "../constants/designerMenuItems.ts";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import { List, ListItemButton, Typography } from "@mui/joy";

const SideNav = () => {
  const menuItemType = useDesignerStore((s) => s.menuItemType);
  const setMenuItemType = useDesignerStore((s) => s.setMenuItemType);

  return (
    <List sx={{ gap: 1 }}>
      {designerMenuItems.map((item) => {
        const Icon = item.icon;
        return (
          <ListItemButton
            orientation="vertical"
            variant="plain"
            onClick={() => setMenuItemType(item.type)}
            selected={menuItemType === item.type}
          >
            <Icon />
            <Typography level="body-sm">{item.label}</Typography>
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default SideNav;
