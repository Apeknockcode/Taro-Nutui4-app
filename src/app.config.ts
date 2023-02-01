export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/classification/classification',
    'pages/personalcenter/personalcenter',
    'pages/shopcart/shopcart'
  ],
  subPackages: [
    {
      "root": "package",
      "pages": [
        "cat/cat",
        "dog/dog"
      ]
    }
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
  },
  tabBar: {
    custom:true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#000000',
    list: [
      {
        iconPath:'',
        selectedIconPath:'',
        pagePath: "pages/index/index",
        text: "首页"
    }, {
      iconPath:'',
      selectedIconPath:'',
      pagePath: "pages/classification/classification",
      text: "分类"
    }, {
      iconPath:'',
      selectedIconPath:'',
      pagePath: "pages/shopcart/shopcart",
      text: "购物车"
    }, {
      iconPath:'',
        selectedIconPath:'',
        pagePath: "pages/personalcenter/personalcenter",
        text: "我的"
    }
  ]
  },
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
