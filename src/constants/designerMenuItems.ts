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
  icon: Icon;
  disabled: boolean;
}

const designerMenuItems: DesignerMenuItem[] = [
  {
    type: DesignerMenuItemType.Package,
    label: Literal.Package,
    icon: Box,
    disabled: false,
  },
  {
    type: DesignerMenuItemType.Templates,
    label: Literal.Templates,
    icon: Aperture,
    disabled: true,
  },
  {
    type: DesignerMenuItemType.Materials,
    label: Literal.Materials,
    icon: Image,
    disabled: true,
  },
  {
    type: DesignerMenuItemType.Text,
    label: Literal.Text,
    icon: Type,
    disabled: true,
  },
  {
    type: DesignerMenuItemType.Tools,
    label: Literal.Tools,
    icon: Tool,
    disabled: true,
  },
];

export { DesignerMenuItem, designerMenuItems, DesignerMenuItemType };
