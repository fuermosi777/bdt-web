
// Strings here are dataURL.
interface BoxPreviewerImageData {
  top: string;
  cover: string;
  back: string;
  left: string;
  right: string;
  bottom: string;
}

interface PlainBottlePreviewerImageData {
  cover: string
}

type PreviewerImageData = BoxPreviewerImageData | PlainBottlePreviewerImageData;

export {
  BoxPreviewerImageData,
  PlainBottlePreviewerImageData,
  PreviewerImageData,
};
