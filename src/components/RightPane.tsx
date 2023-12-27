import React from "react";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import { Box, Sheet, Typography } from "@mui/joy";
import { Literal } from "../constants/literals.ts";

const RightPane = () => {
  const selectedNodes = useDesignerStore((s) => s.selectedNodes);
  if (selectedNodes.length === 1) {
    console.log(selectedNodes[0]);
  }

  function isImageNode() {
    if (selectedNodes.length !== 1) {
      return false;
    }
    return selectedNodes[0].attrs.name === "image";
  }

  function isTextNode() {
    if (selectedNodes.length !== 1) {
      return false;
    }
    return selectedNodes[0].attrs.name === "text";
  }

  return (
    <Sheet
      sx={{
        display: { xs: "none", sm: "initial" },
        borderLeft: "1px solid",
        borderColor: "divider",
      }}
    >
      {selectedNodes.length > 1 && (
        <Box
          sx={{
            gap: 2,
            p: 2,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            "& > *:nth-child(odd)": { color: "text.secondary" },
          }}
        >
          {Literal.SelectedMultipleShapes}
        </Box>
      )}
      {selectedNodes.length === 1 && (
        <Box
          sx={{
            gap: 2,
            p: 2,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            "& > *:nth-child(odd)": { color: "text.secondary" },
          }}
        >
          <Typography level="title-sm">{Literal.ShapeType}</Typography>
          <Typography level="body-sm" textColor="text.primary">
            {isImageNode() ? "图片" : "文字"}
          </Typography>
          <Typography level="title-sm">{Literal.Width}</Typography>
          <Typography level="body-sm" textColor="text.primary">
            {Number(
              selectedNodes[0].attrs.width *
                (selectedNodes[0].attrs.scaleX || 1)
            ).toFixed(1)}
          </Typography>

          {isImageNode() && (
            <>
              <Typography level="title-sm">{Literal.Height}</Typography>
              <Typography level="body-sm" textColor="text.primary">
                {Number(
                  selectedNodes[0].attrs.height *
                    (selectedNodes[0].attrs.scaleY || 1)
                ).toFixed(1)}
              </Typography>
            </>
          )}

          <Typography level="title-sm">{Literal.X}</Typography>
          <Typography level="body-sm" textColor="text.primary">
            {Number(selectedNodes[0].attrs.x).toFixed(1)}
          </Typography>
          <Typography level="title-sm">{Literal.Y}</Typography>
          <Typography level="body-sm" textColor="text.primary">
            {Number(selectedNodes[0].attrs.y).toFixed(1)}
          </Typography>

          {isTextNode() && (
            <>
              <Typography level="title-sm">{Literal.TextContent}</Typography>
              <Typography level="body-sm" textColor="text.primary">
                "{selectedNodes[0].attrs.text}"
              </Typography>
            </>
          )}
        </Box>
      )}
    </Sheet>
  );
};

export default RightPane;
