// TODO: consider using remote load JSON.

import { PackagePreset } from "../interfaces/PackagePreset";

const packagePresets: PackagePreset[] = [
  {
    id: "1",
    name: "藏祥云",
    thumbnailUrl: "/presets/1/thumbnail.jpg",
    assets: [{
      type: 'box',
      images: [{
        url: "/presets/1/left.jpeg",
        width: 438,
        height: 1186,
        x: 0,
        y: 628
      }, {
        url: "/presets/1/top.jpeg",
        width: 435,
        height: 628,
        x: 0,
        y: 0
      }, {
        url: "/presets/1/front.jpeg",
        width: 633,
        height: 1186,
        x: 438,
        y: 628
      }, {
        url: "/presets/1/right.jpeg",
        width: 441,
        height: 1186,
        x: 1071,
        y: 628
      }, {
        url: "/presets/1/bottom.jpeg",
        width: 435,
        height: 628,
        x: 1071,
        y: 1818
      }, {
        url: "/presets/1/back.jpeg",
        width: 632,
        height: 1186,
        x: 1510,
        y: 628
      }]
    }]
  },
];

export { packagePresets };
