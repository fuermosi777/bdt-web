import React, { useEffect, useRef } from "react";
import { PackageAsset, PackageShapeType } from "../interfaces/PackagePreset.ts";
import "./PackageEditor.scss";
import Konva from "konva";
import ThreeDPreviewer from "./ThreeDPreviewer.tsx";

const PackageEditor = (props: {
  asset: PackageAsset;
  onEdited: (imageData: ThreeDPreviewer.ImageData) => void;
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { asset } = props;
  let stage: Konva.Stage | null;

  function saveData() {
    if (!stage) return;
    // TODO: make this less curated.
    let imageData: ThreeDPreviewer.ImageData = {
      top: stage.find("Group")[0].toDataURL(),
      cover: stage.find("Group")[1].toDataURL(),
      back: stage.find("Group")[2].toDataURL(),
      left: stage.find("Group")[3].toDataURL(),
      right: stage.find("Group")[4].toDataURL(),
      bottom: stage.find("Group")[5].toDataURL(),
    };
    props.onEdited(imageData)
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
  }, []);

  return (
    <div className="PackageEditor">
      <div className="canvas" ref={canvasRef}></div>
    </div>
  );
};

export default PackageEditor;
