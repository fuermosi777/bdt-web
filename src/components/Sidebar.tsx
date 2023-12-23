import React from "react";
import "./Sidebar.scss";
import VerticalMenu from "./VerticalMenu.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { packagePresets } from "../constants/presets.ts";
import { PackageAsset, PackageType } from "../interfaces/PackagePreset.ts";
import { Card } from "@mui/joy";

const AssetTile = (props: { asset: PackageAsset }) => {
  const setAsset = useDesignerStore((s) => s.setAsset);
  // TODO: move these to a util func or constant.
  let label: string = "其他";
  if (props.asset.type === PackageType.Box) {
    label = "外包装盒";
  }
  return (
    <Card size="lg" onClick={() => setAsset(props.asset)}>
      {label}
    </Card>
  );
};

const Sidebar = () => {
  const menuItemType = useDesignerStore((s) => s.menuItemType);
  return (
    <div className="Sidebar">
      <VerticalMenu />
      <div className="secondary-container">
        {menuItemType === DesignerMenuItemType.Package &&
          packagePresets[0].assets.map((asset) => {
            return <AssetTile asset={asset} />;
          })}

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
      </div>
    </div>
  );
};

export default Sidebar;
