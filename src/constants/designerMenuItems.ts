import { Aperture, Box, Icon, Image, Tool, Type } from "react-feather";
import { Literal } from "./literals.ts";

enum DesignerMenuItemType {
  package,
  templates,
  materials,
  text,
  tools,
}

interface DesignerMenuItem {
  type: DesignerMenuItemType;
  label: string;
  icon: Icon
}

const designerMenuItems: DesignerMenuItem[] = [
  {
    type: DesignerMenuItemType.package,
    label: Literal.Package,
    icon: Box
  },
  {
    type: DesignerMenuItemType.templates,
    label: Literal.Templates,
    icon: Aperture
  },
  {
    type: DesignerMenuItemType.materials,
    label: Literal.Materials,
    icon: Image
  },
  {
    type: DesignerMenuItemType.text,
    label: Literal.Text,
    icon: Type
  },
  {
    type: DesignerMenuItemType.tools,
    label: Literal.Tools,
    icon: Tool
  },
];

export { DesignerMenuItem, designerMenuItems, DesignerMenuItemType };
