import { Aperture, Box, Icon, Image, Tool, Type } from "react-feather";
import { Literal } from "./literals.ts";

enum DesignerMenuItemType {
  Package,
  Templates,
  Materials,
  Text,
  Tools,
}

interface DesignerMenuItem {
  type: DesignerMenuItemType;
  label: string;
  icon: Icon
}

const designerMenuItems: DesignerMenuItem[] = [
  {
    type: DesignerMenuItemType.Package,
    label: Literal.Package,
    icon: Box
  },
  {
    type: DesignerMenuItemType.Templates,
    label: Literal.Templates,
    icon: Aperture
  },
  {
    type: DesignerMenuItemType.Materials,
    label: Literal.Materials,
    icon: Image
  },
  {
    type: DesignerMenuItemType.Text,
    label: Literal.Text,
    icon: Type
  },
  {
    type: DesignerMenuItemType.Tools,
    label: Literal.Tools,
    icon: Tool
  },
];

export { DesignerMenuItem, designerMenuItems, DesignerMenuItemType };
