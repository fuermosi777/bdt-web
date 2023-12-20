import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./Designer.scss";
import Sidebar from "../components/Sidebar.tsx";
import MainPanel from "../components/MainPanel.tsx";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";
import Konva from "konva";
import { packagePresets } from "../constants/presets.ts";

// The entry point for the packaging designer tool.
const Designer = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  let stage: Konva.Stage | null;

  useEffect(() => {
    if (!canvasRef.current) return;

    stage = new Konva.Stage({
      container: canvasRef.current,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      draggable: true,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const selected = 0;
    const preset = packagePresets[selected];
    for (let asset of preset.assets) {
      for (let image of asset.images) {
        let imageObj = new Image();
        imageObj.src = image.url;
        imageObj.onload = () => {
          var toAdd = new Konva.Image({
            x: image.x,
            y: image.y,
            image: imageObj,
            width: image.width,
            height: image.height,
            draggable: false
          });
          layer.add(toAdd);
          // stage!.on("dragmove", () => {
          //   toAdd.absolutePosition({ x: image.x, y: image.y });
          // });
        };
      }
    }

    stage.scale({x: 0.4, y: 0.4})
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
            <PresetThumbnail preset={preset} />
          ))}
        </Sidebar>
        <MainPanel>
          <div
            className="canvas"
            ref={canvasRef}
          ></div>
        </MainPanel>
      </Content>
    </div>
  );
};

export default Designer;
