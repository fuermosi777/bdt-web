import React from "react";

import Header from "../components/Header.tsx";
import { PackageType } from "../interfaces/PackagePreset.ts";
import PackageEditor from "../components/PackageEditor.tsx";
import { useDesignerStore } from "../stores/DesignerStore.ts";
import DesignerLayout from "../components/DesignerLayout.tsx";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import RightPane from "../components/RightPane.tsx";
import ExpBottlePreview from "../components/ExpBottlePreview.tsx";
import {
  BoxPreviewerImageData,
  PlainBottlePreviewerImageData,
} from "../interfaces/PreviewerImageData.ts";
import TabNav from "../components/TabNav.tsx";
import { packagePresets } from "../constants/presets.ts";
import AssetPicker from "../components/AssetPicker.tsx";

// TODO: use router to handle presets selection and assets. Use store to handle UI status such as editor/previewer.
// TODO: presist changes to the editor.

// The entry point for the packaging designer tool.
const Designer = () => {
  const display = useDesignerStore((s) => s.display);
  const imageData = useDesignerStore((s) => s.imageData);
  const setImageData = useDesignerStore((s) => s.setImageData);

  const asset = useDesignerStore((s) => s.asset);
  const leftDrawerOpen = useDesignerStore((s) => s.leftDrawerOpen);
  const setLeftDrawer = useDesignerStore((s) => s.setLeftDrawer);

  return (
    <DesignerLayout.Root>
      <DesignerLayout.Header>
        <Header />
      </DesignerLayout.Header>
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

        <DesignerLayout.SideNav>
          <RightPane />
        </DesignerLayout.SideNav>
      </DesignerLayout.Main>
      <DesignerLayout.Tab>
        <TabNav />
      </DesignerLayout.Tab>
      <DesignerLayout.LeftDrawer
        open={leftDrawerOpen}
        onClose={() => setLeftDrawer(false)}
      >
        <AssetPicker assets={packagePresets[0].assets} />
      </DesignerLayout.LeftDrawer>
    </DesignerLayout.Root>
  );
};

export default Designer;
