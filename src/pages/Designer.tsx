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
import RightPane from "../components/RightPane.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";
import {
  BoxPreviewerImageData,
  PlainBottlePreviewerImageData,
} from "../interfaces/PreviewerImageData.ts";

const AssetTile = (props: { asset: PackageAsset }) => {
  const setAsset = useDesignerStore((s) => s.setAsset);
  return (
    <Button
      startDecorator={<ShoppingBag />}
      onClick={() => setAsset(props.asset)}
      sx={{
        // TODO: remove this to outer layout.
        marginBottom: 1,
      }}
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
  const selectedNodes = useDesignerStore((s) => s.selectedNodes);
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
          display === "editor" &&
          packagePresets[0].assets.map((asset) => {
            return <AssetTile asset={asset} key={asset.id} />;
          })}
      </DesignerLayout.SidePane>
      <DesignerLayout.Main>
        {asset && (
          <PackageEditor
            asset={asset}
            onEdited={setImageData}
            hidden={display !== "editor"}
          />
        )}
        {display === "previewer" &&
          imageData &&
          asset?.type === PackageType.Box && (
            <ThreeDPreviewer imageData={imageData as BoxPreviewerImageData} />
          )}
        {display === "previewer" &&
          imageData &&
          asset?.type === PackageType.PlainBottle && (
            <ExpBottlePreview
              imageData={imageData as PlainBottlePreviewerImageData}
            />
          )}
      </DesignerLayout.Main>
      {selectedNodes.length > 0 && <RightPane />}
    </DesignerLayout.Root>
  );
};

export default Designer;
