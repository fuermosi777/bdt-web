// TODO: consider using remote load JSON.

import { PackagePreset, PackageType, PackageShapeType } from "../interfaces/PackagePreset.ts";

const packagePresets: PackagePreset[] = [
  {
    id: "2",
    name: "青花白",
    thumbnailUrl: "/presets/2/thumbnail.jpg",
    assets: [
      {
        type: PackageType.PlainBottle,
        groups: [
          {
            x: 0,
            y: 0,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/top.png",
                width: 440,
                height: 440,
                x: 0,
                y: 0,
                draggable: false
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/stamp.png",
                width: 405,
                height: 394,
                x: 20,
                y: 20,
                draggable: true
              },
              {
                type: PackageShapeType.Text,
                text: "样",
                fontFamily: "Menlo",
                fontSize: 100,
                fill: "blue",
                x: 80,
                y: 80,
                draggable: true
              },
              {
                type: PackageShapeType.Text,
                text: "品",
                fontFamily: "Menlo",
                fontSize: 100,
                fill: "blue",
                x: 280,
                y: 280,
                draggable: true
              },
            ],
          },
          {
            x: 0,
            y: 440,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/side.png",
                width: 506,
                height: 1138,
                x: 0,
                y: 0,
                draggable: false
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/gate.png",
                width: 308,
                height: 126,
                x: 60,
                y: 120,
                draggable: true
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/legal.png",
                width: 395,
                height: 459,
                x: 25,
                y: 300,
                draggable: true
              },
            ],
          },
          {
            x: 440,
            y: 440,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/front.png",
                width: 440,
                height: 1133,
                x: 0,
                y: 0,
                draggable: false
              },
            ],
          },
          {
            x: 875,
            y: 440,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/side.png",
                width: 506,
                height: 1138,
                x: 0,
                y: 0,
                draggable: false
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/gate.png",
                width: 308,
                height: 126,
                x: 60,
                y: 120,
                draggable: true
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/legal.png",
                width: 395,
                height: 459,
                x: 25,
                y: 300,
                draggable: true
              },
            ],
          },
          {
            x: 1320,
            y: 440,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/front.png",
                width: 440,
                height: 1133,
                x: 0,
                y: 0,
                draggable: false
              },
            ],
          },
          {
            x: 875,
            y: 1570,
            shapes: [
              {
                type: PackageShapeType.Image,
                url: "/presets/2/top.png",
                width: 440,
                height: 440,
                x: 0,
                y: 0,
                draggable: true
              },
              {
                type: PackageShapeType.Image,
                url: "/presets/2/stamp.png",
                width: 405,
                height: 394,
                x: 20,
                y: 20,
                draggable: true
              },
              {
                type: PackageShapeType.Text,
                text: "样",
                fontFamily: "Menlo",
                fontSize: 100,
                fill: "blue",
                x: 80,
                y: 80,
                draggable: true
              },
              {
                type: PackageShapeType.Text,
                text: "品",
                fontFamily: "Menlo",
                fontSize: 100,
                fill: "blue",
                x: 280,
                y: 280,
                draggable: true
              },
            ],
          },
        ],
      },
    ],
  },
];

export { packagePresets };
