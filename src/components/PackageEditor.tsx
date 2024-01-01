import React, { useEffect, useRef } from "react";
import {
  PackageAsset,
  PackageShapeType,
  PackageType,
} from "../interfaces/PackagePreset.ts";
import "./PackageEditor.scss";
import Konva from "konva";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import {
  PreviewerImageData,
  BoxPreviewerImageData,
  PlainBottlePreviewerImageData,
} from "../interfaces/PreviewerImageData.ts";

const PackageEditor = (props: {
  // Immutable.
  asset: PackageAsset;
  onEdited: (imageData: PreviewerImageData) => void;
  hidden: boolean;
}) => {
  const setSelectedNodes = useDesignerStore((s) => s.setSelectedNodes);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { asset } = props;
  let stage: Konva.Stage | null;

  function saveData() {
    if (!stage) return;

    if (stage.attrs.name === PackageType.Box) {
      let imageData: BoxPreviewerImageData = {
        top: stage.find("Group")[0].toDataURL({ pixelRatio: 2 }),
        cover: stage.find("Group")[1].toDataURL({ pixelRatio: 2 }),
        back: stage.find("Group")[2].toDataURL({ pixelRatio: 2 }),
        left: stage.find("Group")[3].toDataURL({ pixelRatio: 2 }),
        right: stage.find("Group")[4].toDataURL({ pixelRatio: 2 }),
        bottom: stage.find("Group")[5].toDataURL({ pixelRatio: 2 }),
      };
      props.onEdited(imageData);
    }
    if (stage.attrs.name === PackageType.PlainBottle) {
      let imageData: PlainBottlePreviewerImageData = {
        cover: stage.find("Group")[0].toDataURL({ pixelRatio: 2 }),
      };
      props.onEdited(imageData);
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    stage = new Konva.Stage({
      container: canvasRef.current,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      draggable: false,
      id: asset.id,
      name: asset.type,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    stage.scale({ x: 0.4, y: 0.4 });

    stage.on("dragend", saveData);

    for (let group of asset.groups) {
      const groupToAdd = new Konva.Group({
        x: group.x,
        y: group.y,
        width: group.width,
        height: group.height,
        draggable: false,
      });
      groupToAdd.absolutePosition({ x: group.x, y: group.y });
      layer.add(groupToAdd);

      for (let shape of group.shapes) {
        if (shape.type === PackageShapeType.Image) {
          let image = new Image();
          image.src = shape.url || "";
          let imageToAdd = new Konva.Image({
            id: shape.id,
            name: "image",
            x: shape.x,
            y: shape.y,
            image: image,
            width: shape.width,
            height: shape.height,
            rotation: shape.rotation || 0,
            offsetX: shape.offsetX || 0,
            offsetY: shape.offsetY || 0,
            draggable: shape.draggable,
          });

          groupToAdd.add(imageToAdd);
        } else if (shape.type == PackageShapeType.Text) {
          let text = new Konva.Text({
            id: shape.id,
            name: "text",
            x: shape.x,
            y: shape.y,
            text: shape.text,
            width: shape.width,
            fontSize: shape.fontSize,
            fontFamily: shape.fontFamily,
            fill: shape.fill,
            draggable: shape.draggable,
          });
          text.on("transform", () => {
            // reset scale, so only with is changing by transformer
            text.setAttrs({
              width: text.width() * text.scaleX(),
              scaleX: 1,
            });
          });
          groupToAdd.add(text);
        }
      }
    }

    // Add transformer in the end so that it is always on top.
    let imageTransformer = new Konva.Transformer();
    layer.add(imageTransformer);

    let textTransformer = new Konva.Transformer({
      enabledAnchors: ["middle-left", "middle-right"],
      // set minimum width of text
      boundBoxFunc: function (oldBox, newBox) {
        newBox.width = Math.max(50, newBox.width);
        return newBox;
      },
    });
    layer.add(textTransformer);

    stage.on("mousedown touchstart", (e) => {
      // do nothing if we mousedown on any shape
      if (e.target !== stage) {
        return;
      }
      e.evt.preventDefault();
    });

    stage.on("mouseup touchend", saveData);

    // clicks should select/deselect shapes
    stage.on("click tap", function (e) {
      // if click on empty area - remove all selections
      if (e.target === stage) {
        imageTransformer.nodes([]);
        textTransformer.nodes([]);
        setSelectedNodes([]);
        return;
      }

      // Click on background undraggable image clear removes all selections.
      if (!e.target.draggable()) {
        imageTransformer.nodes([]);
        textTransformer.nodes([]);
        setSelectedNodes([]);
        return;
      }

      // do we pressed shift or ctrl?
      const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
      const isSelected =
        imageTransformer.nodes().indexOf(e.target) >= 0 ||
        textTransformer.nodes().indexOf(e.target) >= 0;

      if (e.target.hasName("image")) {
        // If clicking image, clear tr on texts.
        textTransformer.nodes([]);
        if (!metaPressed && !isSelected) {
          // if no key pressed and the node is not selected
          // select just one.
          imageTransformer.nodes([e.target]);
        } else if (metaPressed && isSelected) {
          // if we pressed keys and node was selected
          // we need to remove it from selection:
          const nodes = imageTransformer.nodes().slice(); // use slice to have new copy of array
          // remove node from array
          nodes.splice(nodes.indexOf(e.target), 1);
          imageTransformer.nodes(nodes);
        } else if (metaPressed && !isSelected) {
          // add the node into selection
          const nodes = imageTransformer.nodes().concat([e.target]);
          imageTransformer.nodes(nodes);
        }
      } else if (e.target.hasName("text")) {
        imageTransformer.nodes([]);
        if (!metaPressed && !isSelected) {
          // if no key pressed and the node is not selected
          // select just one.
          textTransformer.nodes([e.target]);
        }
      }

      // Trigger store update.
      let imageNodes = imageTransformer.nodes().slice();
      let textNodes = textTransformer.nodes().slice();
      setSelectedNodes([...imageNodes, ...textNodes]);
    });

    saveData();
  }, [asset]);

  return (
    <div className={"PackageEditor " + (props.hidden ? "hidden" : "")}>
      <div className="canvas" ref={canvasRef}></div>
    </div>
  );
};

export default PackageEditor;
