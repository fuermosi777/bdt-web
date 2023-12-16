import React from "react";

// import logo from "./logo.svg";
import "./App.scss";
import Sidebar from "../components/Sidebar.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <ThreeDPreviewer/>
    </div>
  );
}

export default App;
