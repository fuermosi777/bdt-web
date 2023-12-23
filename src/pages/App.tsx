import React, { useState } from "react";

import "./App.scss";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";

import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";

const App = () => {
  const [previewer, setPreviewer] = useState("bottle");
  return (
    <div className="App">
      
    </div>
  );
};

export default App;
