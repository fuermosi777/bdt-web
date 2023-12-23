import { create } from "zustand";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";
import { PackageAsset } from "../interfaces/PackagePreset.ts";

interface DesignState {
  menuItemType: DesignerMenuItemType;
  setMenuItemType: (type: DesignerMenuItemType) => void;

  // The package asset to be edited.
  asset?: PackageAsset;
  setAsset: (by: PackageAsset) => void;
  closeAsset: () => void;
}

const useDesignerStore = create<DesignState>((set) => ({
  menuItemType: DesignerMenuItemType.Package,
  setMenuItemType: (type) => set((_) => ({ menuItemType: type })),
  setAsset: (by) => set((_) => ({ asset: by })),
  closeAsset: () => set((_) => ({ asset: undefined })),
}));

export { useDesignerStore };
