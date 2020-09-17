export default {
  pages: [
    'pages/index/index',
    'pages/counter/index',
    'pages/data/index',
    'pages/map/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#626567',
    selectedColor: '#626567',
    backgroundColor: '#FBFBFB',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/index.png',
        selectedIconPath: './assets/index.png',
      },
      {
        pagePath: 'pages/counter/index',
        text: '计数',
        iconPath: './assets/counter.png',
        selectedIconPath: './assets/counter.png',
      },
      {
        pagePath: 'pages/data/index',
        text: '数据',
        iconPath: './assets/data.png',
        selectedIconPath: './assets/data.png',
      },
      {
        pagePath: 'pages/map/index',
        text: '地图',
        iconPath: './assets/map.png',
        selectedIconPath: './assets/map.png',
      },
    ],
  },
}
