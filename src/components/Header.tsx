import React from "react";

import { Box, Button, IconButton, Stack } from "@mui/joy";
import { Package } from "react-feather";

const Header = () => {
  return (
    <Box
      className="Header"
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        p: 1,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <IconButton
          size="md"
          variant="outlined"
          color="neutral"
          href="/"
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            borderRadius: "50%",
          }}
        >
          <Package />
        </IconButton>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          // href="/joy-ui/getting-started/templates/email/"
          size="sm"
          sx={{ alignSelf: "center" }}
        >
          编辑
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          // href="/joy-ui/getting-started/templates/email/"
          size="sm"
          sx={{ alignSelf: "center" }}
        >
          3D预览
        </Button>
      </Stack>
    </Box>
    // {Literal.Title}
  );
};

export default Header;
