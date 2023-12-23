import { create } from "zustand";
import { DesignerMenuItemType } from "../constants/designerMenuItems.ts";

interface DesignState {
  menuItemType: DesignerMenuItemType;
  setMenuItemType: (type: DesignerMenuItemType) => void;
}

const useDesignerStore = create<DesignState>((set) => ({
  menuItemType: DesignerMenuItemType.materials,
  setMenuItemType: (type) => set((_) => ({ menuItemType: type })),
}));

export { useDesignerStore };
