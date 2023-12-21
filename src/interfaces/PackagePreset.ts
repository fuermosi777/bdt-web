enum PackageType {
  Box = "Box",
  PlainBottle = "PlainBottle",
  LayeredBottle = "LayeredBottle",
}

enum PackageShapeType {
  Image = "Image",
  Text = "Text"
}

interface PackageShape {
  type: PackageShapeType;
  x: number;
  y: number;
  draggable: boolean;

  url?: string;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  width?: number;
  height?: number;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
}

interface PackageGroup {
  x: number;
  y: number;
  shapes: PackageShape[];
}

interface PackageAsset {
  type: PackageType;
  groups: PackageGroup[];
}

// Interface for packaging.
interface PackagePreset {
  id: string;
  name: string;
  thumbnailUrl: string;
  assets: PackageAsset[];
}

export { PackageType, PackageShapeType, PackagePreset };
