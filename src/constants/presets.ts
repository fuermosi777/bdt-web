// TODO: consider using remote load JSON.
import { v4 as uuid } from "uuid";

import {
  PackagePreset,
  PackageShape,
  PackageType,
  PackageShapeType,
} from "../interfaces/PackagePreset.ts";

const top = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/top.png",
  width: 440,
  height: 440,
  x: 0,
  y: 0,
  draggable: false,
});

const side = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/side.png",
  width: 440,
  height: 1138,
  x: 0,
  y: 0,
  draggable: false,
});

const stamp = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/stamp.png",
  width: 400,
  height: 400,
  x: 20,
  y: 20,
  draggable: true,
});

const sampleChar1 = () => ({
  id: uuid(),
  type: PackageShapeType.Text,
  text: "样",
  fontFamily: "zihun71hao-yushoujinshu",
  fontSize: 160,
  fill: "#1E336D",
  x: 80,
  y: 80,
  width: 160,
  draggable: true,
});

const sampleChar2 = () => ({
  id: uuid(),
  type: PackageShapeType.Text,
  text: "品",
  fontFamily: "zihun71hao-yushoujinshu",
  fontSize: 160,
  fill: "#1E336D",
  x: 220,
  y: 220,
  width: 160,
  draggable: true,
});

const slogan = () => ({
  id: uuid(),
  type: PackageShapeType.Text,
  text: "企业宣传语",
  fontFamily: "zihun116hao-fengmingshoushu",
  fontSize: 50,
  fill: "#1E336D",
  x: 200,
  y: 580,
  width: 50,
  draggable: true,
});

const text1 = () => ({
  id: uuid(),
  type: PackageShapeType.Text,
  text: "【酱香·珍藏】",
  fontFamily: "zihun206hao-jianghanshoushu",
  fontSize: 30,
  fill: "#1E336D",
  x: 120,
  y: 880,
  width: 210,
  draggable: true,
});

const text2 = () => ({
  id: uuid(),
  type: PackageShapeType.Text,
  text: "酱香型白酒 酒精度：53%VOL 净含量：500ML",
  fontFamily: "serif",
  fontSize: 18,
  fill: "#1E336D",
  x: 30,
  y: 1050,
  width: 400,
  draggable: true,
});

const gate = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/gate.png",
  width: 308,
  height: 126,
  x: 60,
  y: 120,
  draggable: true,
});

const label = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/label.png",
  width: 395,
  height: 459,
  x: 25,
  y: 300,
  draggable: true,
});

const barcode = () => ({
  id: uuid(),
  type: PackageShapeType.Image,
  url: "/presets/2/barcode.png",
  width: 150,
  height: 90,
  x: 150,
  y: 1000,
  draggable: true,
});

const packagePresets: PackagePreset[] = [
  {
    id: uuid(),
    name: "青花白",
    thumbnailUrl: "/presets/2/thumbnail.jpg",
    assets: [
      {
        id: uuid(),
        type: PackageType.Box,
        width: 1760,
        height: 1578,
        groups: [
          // Top side.
          {
            id: uuid(),
            width: 440,
            height: 440,
            x: 0,
            y: 0,
            shapes: [top(), stamp(), sampleChar1(), sampleChar2()],
          },
          // Left side.
          {
            id: uuid(),
            x: 0,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [side(), gate(), label(), barcode()],
          },
          // Front side.
          {
            id: uuid(),
            x: 440,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [
              side(),
              stamp(),
              sampleChar1(),
              sampleChar2(),
              slogan(),
              text1(),
              text2(),
            ],
          },
          // Right side.
          {
            id: uuid(),
            x: 880,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [side(), gate(), label(), barcode()],
          },
          // Back side.
          {
            id: uuid(),
            x: 1320,
            y: 440,
            width: 440,
            height: 1138,
            shapes: [
              side(),
              stamp(),
              sampleChar1(),
              sampleChar2(),
              slogan(),
              text1(),
              text2(),
            ],
          },
          // Bottom side.
          {
            id: uuid(),
            x: 880,
            y: 1578,
            width: 440,
            height: 440,
            shapes: [top(), stamp(), sampleChar1(), sampleChar2()],
          },
        ],
      },
    ],
  },
];

export { packagePresets };
