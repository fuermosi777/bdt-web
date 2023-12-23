import React from "react";

import Header from "../components/Header.tsx";
import { packagePresets } from "../constants/presets.ts";
import { PackageAsset, PackageType } from "../interfaces/PackagePreset.ts";
import PackageEditor from "../components/PackageEditor.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import DesignerLayout from "../components/DesignerLayout.tsx";
import SideNav from "../components/SideNav.tsx";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { Card } from "@mui/joy";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";

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

// The entry point for the packaging designer tool.
const Designer = () => {
  const menuItemType = useDesignerStore((s) => s.menuItemType);
  const asset = useDesignerStore((s) => s.asset);
  const display = useDesignerStore((s) => s.display);
  const imageData = useDesignerStore((s) => s.imageData);
  const setImageData = useDesignerStore((s) => s.setImageData);

  return (
    <DesignerLayout.Root>
      <DesignerLayout.Header>
        <Header />
      </DesignerLayout.Header>
      <DesignerLayout.SideNav>
        <SideNav />
      </DesignerLayout.SideNav>
      <DesignerLayout.SidePane>
        {menuItemType === DesignerMenuItemType.Package &&
          packagePresets[0].assets.map((asset) => {
            return <AssetTile asset={asset} />;
          })}
      </DesignerLayout.SidePane>
      <DesignerLayout.Main>
        {display === "editor" && asset && <PackageEditor asset={asset} onEdited={setImageData} />}
        {display === "previewer" && imageData && (
          <ThreeDPreviewer imageData={imageData} />
        )}
      </DesignerLayout.Main>
    </DesignerLayout.Root>
  );
};

export default Designer;
