import React, { useState } from "react";

import "./Designer.scss";
import Sidebar from "../components/Sidebar.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import MainPanel from "../components/MainPanel.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";

import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";


// The entry point for the packaging designer tool.
const Designer = () => {
  return (
    <div className="Designer">
      <Header />
      <Content>
        <Sidebar>
          <p></p>
        </Sidebar>
        <MainPanel>
          <p></p>
        </MainPanel>
      </Content>
    </div>
  );
};

export default Designer;
