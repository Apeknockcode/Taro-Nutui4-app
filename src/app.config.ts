export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/classification/index',
    'pages/personalcenter/index',
    'pages/shopcart/index'
  ],
  subPackages: [
    {
      "root": "package",
      "pages": [
        "pages/lastMinutePage/index",
        "pages/goodDetailPage/index",
        "pages/cardVoucherCenter/index",
        "pages/myOrder/index",
        "pages/orderResult/index",
        "pages/orderDetails/index",
        "pages/order/index",
        "pages/register/index"
      ],
      // "independent": true
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
      }, 
      {
        iconPath:'',
        selectedIconPath:'',
        pagePath: "pages/classification/index",
        text: "分类"
      }, 
      {
        iconPath:'',
        selectedIconPath:'',
        pagePath: "pages/shopcart/index",
        text: "购物车"
      }, 
      {
        iconPath:'',
          selectedIconPath:'',
          pagePath: "pages/personalcenter/index",
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
