import React, { useState } from "react";

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
  const asset = useDesignerStore((s) => s.asset);

  return (
    <div className="Designer">
      <Header />
      <Content>
        <Sidebar />
        <MainPanel>
          {asset && <PackageEditor asset={asset} />}

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
