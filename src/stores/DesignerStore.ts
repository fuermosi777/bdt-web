import { create } from "zustand";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { PackageAsset } from "../interfaces/PackagePreset.ts";
import Konva from "konva";
import { PreviewerImageData } from "../interfaces/PreviewerImageData.ts";

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
  isImagesLoaded: boolean;
  setImagesLoaded: (loaded: boolean) => void;
  imageData?: PreviewerImageData;
  setImageData: (data: PreviewerImageData) => void;

  selectedNodes: Konva.Node[];
  setSelectedNodes: (nodes: Konva.Node[]) => void;
  // Update selected node. Assuming only one eligible node selected.
  updateSelectedNodes: (by: Konva.Node) => void;
}

const useDesignerStore = create<DesignState>((set) => ({
  menuItemType: DesignerMenuItemType.Package,
  setMenuItemType: (type) => set((_) => ({ menuItemType: type })),
  setAsset: (by) => set((_) => ({ asset: by })),
  closeAsset: () => set((_) => ({ asset: undefined })),
  display: "editor",
  setDisplay: (type) => set((_) => ({ display: type })),

  isImagesLoaded: false,
  setImagesLoaded: (loaded) => set(() => ({ isImagesLoaded: loaded })),
  setImageData: (data) => set(() => ({ imageData: data })),

  selectedNodes: [],
  setSelectedNodes: (nodes) => set(() => ({ selectedNodes: nodes })),
  updateSelectedNodes: (by) =>
    set((state) => {
      let result: Partial<DesignState> = { selectedNodes: [by] };
      if (state.selectedNodes.length === 1 && state.asset) {
        // Update asset.
        let updatedAsset = structuredClone(state.asset);
        for (let group of updatedAsset.groups) {
          for (let shape of group.shapes) {
            if (shape.id === by.attrs.id) {
              shape.text = by.attrs.text;
              break;
            }
          }
        }
        result.asset = updatedAsset;
      }
      return result;
    }),
}));

export { useDesignerStore };
