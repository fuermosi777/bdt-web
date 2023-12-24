import React from "react";

import Header from "../components/Header.tsx";
import { packagePresets } from "../constants/presets.ts";
import { PackageAsset, PackageType } from "../interfaces/PackagePreset.ts";
import PackageEditor from "../components/PackageEditor.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import DesignerLayout from "../components/DesignerLayout.tsx";
import SideNav from "../components/SideNav.tsx";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { Button } from "@mui/joy";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import { ShoppingBag } from "react-feather";

const AssetTile = (props: { asset: PackageAsset }) => {
  const setAsset = useDesignerStore((s) => s.setAsset);
  return (
    <Button
      startDecorator={<ShoppingBag />}
      onClick={() => setAsset(props.asset)}
    >
      {PackageType.label(props.asset.type)}
    </Button>
  );
};

// TODO: use router to handle presets selection and assets. Use store to handle UI status such as editor/previewer.
// TODO: presist changes to the editor.

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
        {display === "editor" && asset && (
          <PackageEditor asset={asset} onEdited={setImageData} />
        )}
        {display === "previewer" && imageData && (
          <ThreeDPreviewer imageData={imageData} />
        )}
      </DesignerLayout.Main>
    </DesignerLayout.Root>
  );
};

export default Designer;
