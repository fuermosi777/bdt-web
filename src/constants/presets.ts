// TODO: consider using remote load JSON.

import {
  PackagePreset,
  PackageShape,
  PackageType,
  PackageShapeType,
} from "../interfaces/PackagePreset.ts";

const top: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/top.png",
  width: 440,
  height: 440,
  x: 0,
  y: 0,
  draggable: false,
};

const side: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/side.png",
  width: 440,
  height: 1138,
  x: 0,
  y: 0,
  draggable: false,
};

const stamp: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/stamp.png",
  width: 400,
  height: 400,
  x: 20,
  y: 20,
  draggable: true,
};

const sampleChar1: PackageShape = {
  type: PackageShapeType.Text,
  text: "样",
  fontFamily: "Menlo",
  fontSize: 100,
  fill: "blue",
  x: 80,
  y: 80,
  draggable: true,
};

const sampleChar2: PackageShape = {
  type: PackageShapeType.Text,
  text: "品",
  fontFamily: "Menlo",
  fontSize: 100,
  fill: "blue",
  x: 280,
  y: 280,
  draggable: true,
};

const slogan: PackageShape = {
  type: PackageShapeType.Text,
  text: "企\n业\n宣\n传\n语",
  fontFamily: "Menlo",
  fontSize: 50,
  fill: "blue",
  x: 200,
  y: 580,
  draggable: true,
};

const text1: PackageShape = {
  type: PackageShapeType.Text,
  text: "【酱香·珍藏】",
  fontFamily: "Menlo",
  fontSize: 30,
  fill: "blue",
  x: 120,
  y: 880,
  draggable: true,
};

const text2: PackageShape = {
  type: PackageShapeType.Text,
  text: "酱香型白酒 酒精度：53%VOL 净含量：500ML",
  fontFamily: "Menlo",
  fontSize: 18,
  fill: "blue",
  x: 30,
  y: 1050,
  draggable: true,
};

const gate: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/gate.png",
  width: 308,
  height: 126,
  x: 60,
  y: 120,
  draggable: true,
};

const label: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/label.png",
  width: 395,
  height: 459,
  x: 25,
  y: 300,
  draggable: true,
}

const barcode: PackageShape = {
  type: PackageShapeType.Image,
  url: "/presets/2/barcode.png",
  width: 150,
  height: 90,
  x: 150,
  y: 1000,
  draggable: true,
}

const packagePresets: PackagePreset[] = [
  {
    id: "2",
    name: "青花白",
    thumbnailUrl: "/presets/2/thumbnail.jpg",
    assets: [
      {
        type: PackageType.Box,
        width: 1760,
        height: 1578,
        groups: [
          // Top side.
          {
            width: 440,
            height: 440,
            x: 0,
            y: 0,
            shapes: [top, stamp, sampleChar1, sampleChar2],
          },
          // Left side.
          {
            x: 0,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [
              side,
              gate,
              label,
              barcode
            ],
          },
          // Front side.
          {
            x: 440,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [side, stamp, sampleChar1, sampleChar2, slogan, text1, text2],
          },
          // Right side.
          {
            x: 880,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [
              side,
              gate,
              label,
              barcode
            ],
          },
          // Back side.
          {
            x: 1320,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [side, stamp, sampleChar1, sampleChar2, slogan, text1, text2],
          },
          // Bottom side.
          {
            x: 880,
            y: 1578,
            width: 440,
            height: 440,
            shapes: [top, stamp, sampleChar1, sampleChar2],
          },
        ],
      },
    ],
  },
];

export { packagePresets };
