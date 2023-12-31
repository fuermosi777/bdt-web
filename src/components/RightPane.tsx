import React, { useEffect, useState } from "react";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import { Box, Button, Sheet, Textarea, Typography } from "@mui/joy";
import { Literal } from "../constants/literals.ts";
import Konva from "konva";

const RightPane = () => {
  const selectedNodes = useDesignerStore((s) => s.selectedNodes);
  const updateSelectedNodes = useDesignerStore((s) => s.updateSelectedNodes);
  const [text, setText] = useState<string>(getDefaultText());

  // if (selectedNodes.length === 1) {
  //   console.log(selectedNodes[0]);
  // }

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

  function getDefaultText() {
    return isTextNode() ? selectedNodes[0].attrs.text : "";
  }

  function isTextChanged() {
    if (!isTextNode()) return false;
    return text !== getDefaultText();
  }

  function saveText() {
    let node: Konva.Node = selectedNodes[0].clone();
    node.setAttr("text", text);
    updateSelectedNodes(node);
  }

  useEffect(() => {
    // Reset text if selected nodes are changed.
    setText(getDefaultText());
  }, [selectedNodes]);

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
              <Textarea
                size="sm"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </>
          )}

          {isTextChanged() && (
            <Button variant="soft" onClick={saveText}>
              {Literal.Save}
            </Button>
          )}
        </Box>
      )}
    </Sheet>
  );
};

export default RightPane;
