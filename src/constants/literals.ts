enum Literal {
  Title = "BDT",
  HomePage = "首页",
  StartNewDesign = "开始一个新的设计",
  Package = '包装',
  Templates = '模板',
  Text = '文字',
  Materials = '素材',
  Tools = '工具'
}


namespace Literal {
  export function navigationDestination(type: Literal) {
    if (type === Literal.StartNewDesign) {
      return '/designer'
    }
    return '/'
  }
}

export { Literal };