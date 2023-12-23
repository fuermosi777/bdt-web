import React from "react";
import "./VerticalMenu.scss";
import {
  DesignerMenuItemType,
  designerMenuItems,
} from "../constants/designerMenuItems.ts";
import { useDesignerStore } from "../stores/DesignerStore.ts";

const VerticalMenuItem = (props: {
  children: JSX.Element[];
  type: DesignerMenuItemType;
}) => {
  const menuItemType = useDesignerStore((s) => s.menuItemType);
  const setMenuItemType = useDesignerStore((s) => s.setMenuItemType);
  return (
    <div
      className={`VerticalMenuItem ${props.type === menuItemType ? 'selected' : ''}`}
      onClick={() => setMenuItemType(props.type)}
    >
      {props.children}
    </div>
  );
};

const VerticalMenu = () => {
  return (
    <div className="VerticalMenu">
      {designerMenuItems.map((item) => {
        const Icon = item.icon;
        return (
          <VerticalMenuItem key={item.type} type={item.type}>
            <Icon />
            <label>{item.label}</label>
          </VerticalMenuItem>
        );
      })}
    </div>
  );
};

export default VerticalMenu;
