enum PackageType {
  Box = "Box",
  PlainBottle = "PlainBottle",
  LayeredBottle = "LayeredBottle",
}

namespace PackageType {
  export function label(type: PackageType) {
    switch (type) {
      case PackageType.Box:
        return "外包装盒";
      case PackageType.PlainBottle:
        return "简单瓶";
      case PackageType.LayeredBottle:
        return "多层烤制瓶";
      default:
        return "其他";
    }
  }
}

enum PackageShapeType {
  Image = "Image",
  Text = "Text",
}

interface PackageShape {
  id: string;
  type: PackageShapeType;
  x: number;
  y: number;
  width: number;
  height?: number;
  draggable: boolean;

  url?: string;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
}

interface PackageGroup {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  shapes: PackageShape[];
}

interface PackageAsset {
  id: string;
  type: PackageType;
  groups: PackageGroup[];
  width: number;
  height: number;
}

// Interface for packaging.
interface PackagePreset {
  id: string;
  name: string;
  thumbnailUrl: string;
  assets: PackageAsset[];
}

export {
  PackageType,
  PackageShape,
  PackageShapeType,
  PackagePreset,
  PackageAsset,
};
