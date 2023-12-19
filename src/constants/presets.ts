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
        url: "/presets/1/front.jpeg",
        width: 633,
        height: 1186
      }]
    }]
  },
];

export { packagePresets };
