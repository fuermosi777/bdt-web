import { create } from "zustand";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { PackageAsset } from "../interfaces/PackagePreset.ts";
import ThreeDPreviewer from "../components/ThreeDPreviewer.tsx";
import Konva from "konva";

type DisplayType = "editor" | "previewer";

interface DesignState {
  menuItemType: DesignerMenuItemType;
  setMenuItemType: (type: DesignerMenuItemType) => void;

  // The package asset to be edited.
  asset?: PackageAsset;
  setAsset: (by: PackageAsset) => void;
  closeAsset: () => void;

  display: DisplayType;
  setDisplay: (type: DisplayType) => void;

  // For 3D preview.
  imageData?: ThreeDPreviewer.ImageData;
  setImageData: (data: ThreeDPreviewer.ImageData) => void;

  selectedNodes: Konva.Node[];
  setSelectedNodes: (nodes: Konva.Node[]) => void;
}

const useDesignerStore = create<DesignState>((set) => ({
  menuItemType: DesignerMenuItemType.Package,
  setMenuItemType: (type) => set((_) => ({ menuItemType: type })),
  setAsset: (by) => set((_) => ({ asset: by })),
  closeAsset: () => set((_) => ({ asset: undefined })),
  display: "editor",
  setDisplay: (type) => set((_) => ({ display: type })),

  setImageData: (data) => set(() => ({ imageData: data })),

  selectedNodes: [],
  setSelectedNodes: (nodes) => set(() => ({ selectedNodes: nodes })),
}));

export { useDesignerStore };
