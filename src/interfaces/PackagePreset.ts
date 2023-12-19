interface PackageImage {
  url: string,
  width: number,
  height: number
}

interface PackageAsset {
  type: 'box' | 'bottle'
  images: PackageImage[]
}

// Interface for packaging.
interface PackagePreset {
  id: string,
  name: string,
  thumbnailUrl: string
  assets: PackageAsset[]
}

export { PackagePreset }