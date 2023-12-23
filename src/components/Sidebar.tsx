import React from "react";
import "./Sidebar.scss";
import VerticalMenu from "./VerticalMenu.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";

const Sidebar = () => {
  // const addTest = useDesignerStore(s => s.addTest)
  return (
    <div className="Sidebar">
      <VerticalMenu/>
    </div>
  );
}

export default Sidebar;
