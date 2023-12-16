import React from "react";

// import logo from "./logo.svg";
import "./App.scss";
import Sidebar from "../components/Sidebar.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import MainPanel from "../components/MainPanel.tsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPanel>
        <ThreeDPreviewer />
      </MainPanel>
    </div>
  );
}

export default App;
