enum Literal {
  Title = "BDT 白酒定制平台",
  HomePage = "首页",
  StartNewDesign = "开始一个新的设计"
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