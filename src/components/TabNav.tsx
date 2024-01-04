import { ListItemDecorator, TabList, Tabs, Typography } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import React from "react";
import { designerMenuItems } from "../constants/designerMenuItems.ts";
import { useDesignerStore } from "../stores/DesignerStore.ts";

const TabNav = () => {
  const tabIndex = useDesignerStore((s) => s.tabIndex);
  const setTabIndex = useDesignerStore((s) => s.setTabIndex);
  return (
    <Tabs
      size="lg"
      aria-label="Bottom Navigation"
      defaultValue={0}
      value={tabIndex}
      onChange={(_event, value) => setTabIndex(value as number)}
      sx={(theme) => ({
        p: 1,
        borderRadius: 16,
        maxWidth: 400,
        mx: "auto",
        boxShadow: theme.shadow.sm,
        "--joy-shadowChannel": theme.vars.palette.primary.darkChannel,
        [`& .${tabClasses.root}`]: {
          py: 1,
          flex: 1,
          transition: "0.3s",
          fontWeight: "md",
          fontSize: "md",
          [`&:not(.${tabClasses.selected}):not(:hover)`]: {
            opacity: 0.7,
          },
        },
      })}
    >
      <TabList
        variant="plain"
        size="sm"
        disableUnderline
        sx={{ borderRadius: "lg", p: 0 }}
      >
        {designerMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tab
              key={item.type}
              disableIndicator
              orientation="vertical"
              disabled={item.disabled}
            >
              <ListItemDecorator>
                <Icon />
              </ListItemDecorator>
              <Typography level="body-sm">{item.label}</Typography>
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};

export default TabNav;
