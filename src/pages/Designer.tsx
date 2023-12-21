import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./Designer.scss";
import Sidebar from "../components/Sidebar.tsx";
import MainPanel from "../components/MainPanel.tsx";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";
import Konva from "konva";
import { packagePresets } from "../constants/presets.ts";
import { PackageShapeType } from "../interfaces/PackagePreset.ts";
import { Button } from "@mui/joy";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";

// The entry point for the packaging designer tool.
const Designer = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [imageData, setImageData] = useState<ThreeDPreviewer.ImageData>();

  let stage: Konva.Stage | null;

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

    const selected = 0;
    const preset = packagePresets[selected];

    for (let asset of preset.assets) {
      for (let group of asset.groups) {
        const groupToAdd = new Konva.Group({
          x: group.x,
          y: group.y,
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
    }

    stage.scale({ x: 0.4, y: 0.4 });
  }, []);

  // TODO: move this out of this page.
  const PresetThumbnail = ({ preset }) => {
    return (
      <div className="PresetThumbnail">
        <img src={preset.thumbnailUrl} />
      </div>
    );
  };

  return (
    <div className="Designer">
      <Header />
      <Content>
        <Sidebar>
          {packagePresets.map((preset) => (
            <PresetThumbnail key={preset.id} preset={preset} />
          ))}
          <Button
            onClick={() => {
              if (!stage) return;
              const groups = stage.find((node) => {
                return node.getType() === "Group";
              });
              setImageData({
                top: groups[0].toDataURL(),
                left: groups[1].toDataURL(),
                cover: groups[2].toDataURL(),
                right: groups[3].toDataURL(),
                back: groups[4].toDataURL(),
                bottom: groups[5].toDataURL(),
              })
            }}
          >
            预览3D
          </Button>
        </Sidebar>
        <MainPanel>
          {imageData ? (
            <ThreeDPreviewer imageData={imageData} />
          ) : (
            <div className="canvas" ref={canvasRef}></div>
          )}
        </MainPanel>
      </Content>
    </div>
  );
};

export default Designer;
