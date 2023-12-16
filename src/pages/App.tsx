import React from "react";

import "./App.scss";
import Sidebar from "../components/Sidebar.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import MainPanel from "../components/MainPanel.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPanel>
        <ThreeDPreviewer />
        <ExpBottlePreview />
      </MainPanel>
    </div>
  );
}

export default App;
