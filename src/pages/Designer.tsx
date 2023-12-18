import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    if (!canvasRef.current) return;

    const stage = new Konva.Stage({
      container: canvasRef.current,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      draggable: true,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const background = generateBackground(stage);
    layer.add(background);
  }, []);

  const PresetThumbnail = ({ preset }) => {
    return <div className="PresetThumbnail">
      <img src={preset.thumbnailUrl} />
    </div>;
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
            style={{
              width: 800,
              height: 600,
            }}
          ></div>
        </MainPanel>
      </Content>
    </div>
  );
};

// Generate a Konva.Rect of background so that it can be added to the layer/stage.
function generateBackground(stage: Konva.Stage): Konva.Rect {
  const background = new Konva.Rect({
    x: 0,
    y: 0,
    width: stage.width(),
    height: stage.height(),
    fill: "#FFFFFF",
    listening: false,
  });
  stage.on("dragmove", () => {
    background.absolutePosition({ x: 0, y: 0 });
  });

  return background;
}

export default Designer;
