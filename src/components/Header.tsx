import React from "react";

import { Box, Button, IconButton, Stack } from "@mui/joy";
import { Package } from "react-feather";
import { Literal } from "../constants/literals.ts";
import { useDesignerStore } from "../stores/DesignerStore.ts";

const Header = () => {
  const display = useDesignerStore((s) => s.display);
  const setDisplay = useDesignerStore((s) => s.setDisplay);
  const isImagesLoaded = useDesignerStore((s) => s.isImagesLoaded);

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
          variant={display === "editor" ? "soft" : "plain"}
          color="neutral"
          component="a"
          // href="/joy-ui/getting-started/templates/email/"
          onClick={() => setDisplay('editor')}
          size="sm"
          sx={{ alignSelf: "center" }}
        >
          {Literal.Editor}
        </Button>
        <Button
          variant={display === "previewer" ? "soft" : "plain"}
          disabled={!isImagesLoaded}
          color="neutral"
          component="a"
          onClick={() => setDisplay('previewer')}
          // href="/joy-ui/getting-started/templates/email/"
          size="sm"
          sx={{ alignSelf: "center" }}
        >
          {Literal.Previewer}
        </Button>
      </Stack>
    </Box>
    // {Literal.Title}
  );
};

export default Header;
