import React, { useEffect, useRef } from "react";
import { PackageAsset, PackageShapeType } from "../interfaces/PackagePreset.ts";
import "./PackageEditor.scss";
import Konva from "konva";
import ThreeDPreviewer from "./ThreeDPreviewer.tsx";

const PackageEditor = (props: {
  asset: PackageAsset;
  onEdited: (imageData: ThreeDPreviewer.ImageData) => void;
  hidden: boolean;
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { asset } = props;
  let stage: Konva.Stage | null;

  function saveData() {
    if (!stage) return;
    // TODO: make this less curated.
    let imageData: ThreeDPreviewer.ImageData = {
      top: stage.find("Group")[0].toDataURL({ pixelRatio: 2 }),
      cover: stage.find("Group")[1].toDataURL({ pixelRatio: 2 }),
      back: stage.find("Group")[2].toDataURL({ pixelRatio: 2 }),
      left: stage.find("Group")[3].toDataURL({ pixelRatio: 2 }),
      right: stage.find("Group")[4].toDataURL({ pixelRatio: 2 }),
      bottom: stage.find("Group")[5].toDataURL({ pixelRatio: 2 }),
    };
    props.onEdited(imageData);
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    stage = new Konva.Stage({
      container: canvasRef.current,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      draggable: false,
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
          var imageToAdd = new Konva.Image({
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
          var text = new Konva.Text({
            x: shape.x,
            y: shape.y,
            text: shape.text,
            fontSize: shape.fontSize,
            fontFamily: shape.fontFamily,
            fill: shape.fill,
            draggable: shape.draggable,
          });
          groupToAdd.add(text);
        }
      }
    }

    // Add transformer in the end so that it is always on top.
    let transformer = new Konva.Transformer();
    layer.add(transformer);

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
        transformer.nodes([]);
        return;
      }

      // do nothing if clicked NOT on our rectangles
      // if (!e.target.hasName('rect')) {
      //   return;
      // }

      // do we pressed shift or ctrl?
      const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
      const isSelected = transformer.nodes().indexOf(e.target) >= 0;

      if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        transformer.nodes([e.target]);
      } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = transformer.nodes().slice(); // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1);
        transformer.nodes(nodes);
      } else if (metaPressed && !isSelected) {
        // add the node into selection
        const nodes = transformer.nodes().concat([e.target]);
        transformer.nodes(nodes);
      }
    });
  }, []);

  return (
    <div className={"PackageEditor " + (props.hidden ? "hidden" : "")}>
      <div className="canvas" ref={canvasRef}></div>
    </div>
  );
};

export default PackageEditor;
