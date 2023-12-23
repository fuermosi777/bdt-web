import React, { useEffect, useState } from "react";

import "./Designer.scss";
import Sidebar from "../components/Sidebar.tsx";
import MainPanel from "../components/MainPanel.tsx";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";
import { packagePresets } from "../constants/presets.ts";
import { PackageAsset, PackageShapeType } from "../interfaces/PackagePreset.ts";
import { Button } from "@mui/joy";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import PackageEditor from "../components/PackageEditor.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";


// The entry point for the packaging designer tool.
const Designer = () => {
  const [imageData, setImageData] = useState<ThreeDPreviewer.ImageData>();
  const [editingAsset, setEditingAsset] = useState<PackageAsset>();
  // const test = useDesignerStore(s => s.test);

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
        <Sidebar />
          {/* {packagePresets.map((preset) => (
            <PresetThumbnail key={preset.id} preset={preset} />
          ))} */}
          {/* <Button
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
              });
            }}
          >
            预览3D
          </Button> */}
        <MainPanel>
          {editingAsset && <PackageEditor asset={editingAsset}/>}
          
          {/* {imageData ? (
            <ThreeDPreviewer imageData={imageData} />
          ) : (
            <div className="canvas" ref={canvasRef}></div>
          )} */}
        </MainPanel>
      </Content>
    </div>
  );
};

export default Designer;
