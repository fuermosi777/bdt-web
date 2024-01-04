enum Literal {
  Title = "BDT",
  HomePage = "首页",
  StartNewDesign = "开始一个新的设计",
  Package = "包装",
  Templates = "模板",
  Text = "文字",
  Materials = "素材",
  Tools = "工具",
  Editor = "编辑器",
  Previewer = "3D预览",
  SelectedMultipleShapes = "已选择多个图形",
  ShapeType = "图形类型",
  Width = "宽度",
  Height = "高度",
  X = "X",
  Y = "Y",
  TextContent = "文字内容",
  Save = "保存",
  PickAsset = "选择包装"
}

namespace Literal {
  export function navigationDestination(type: Literal) {
    if (type === Literal.StartNewDesign) {
      return "/designer";
    }
    return "/";
  }
}

export { Literal };
