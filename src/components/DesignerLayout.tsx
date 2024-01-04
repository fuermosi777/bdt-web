import { Box, BoxProps, Drawer, DrawerProps } from "@mui/joy";
import React from "react";

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "64px 1fr 120px",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props: BoxProps) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          boxShadow: "0 2px 4px rgba(100, 100, 100, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[
        {
          // bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            sm: "minmax(0, 1fr) 250px",
          },
          gridTemplateRows: "1fr",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav(props: BoxProps) {
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            sm: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Tab(props: BoxProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 0,
        p: 2,
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        position: "sticky",
        bottom: 0,
        zIndex: 1100,
      }}
    >
      {props.children}
    </Box>
  );
}

function LeftDrawer(props: DrawerProps) {
  return (
    <Drawer
      size="md"
      variant="plain"
      {...props}
      slotProps={{
        content: {
          sx: {
            bgcolor: "transparent",
            p: { md: 3, sm: 0 },
            boxShadow: "none",
          },
        },
      }}
    />
  );
}

export default {
  Root,
  Header,
  Main,
  Tab,
  LeftDrawer,
  SideNav,
};
