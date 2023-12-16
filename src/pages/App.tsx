import React, { useState } from "react";

import "./App.scss";
import Sidebar from "../components/Sidebar.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import MainPanel from "../components/MainPanel.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";

import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";

const App = () => {
  const [previewer, setPreviewer] = useState("bottle");
  return (
    <div className="App">
      <Sidebar>
        <p>侧边栏（施工中👷）</p>
        <ToggleButtonGroup
          value={previewer}
          onChange={(e, value) => setPreviewer(value as string)}
        >
          <Button variant="outlined" value="bottle">
            瓶子
          </Button>
          <Button variant="outlined" value="box">
            盒子
          </Button>
        </ToggleButtonGroup>
      </Sidebar>
      <MainPanel>
        {previewer === 'bottle' && <ExpBottlePreview />}
        {previewer === 'box' && <ThreeDPreviewer />}
      </MainPanel>
    </div>
  );
};

export default App;
