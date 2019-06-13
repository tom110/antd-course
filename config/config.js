export default {
    singular: true,
    plugins: [
       ['umi-plugin-react', {
         // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
         antd: true,
         dva: true
       }],
    ],
    routes: [
      {
        path: '/',
        component: '../layout',
        routes: [
          {
            path: '/',
            component: './helloworld'
          },
          {
            path: '/helloworld',
            component: './helloworld'
          },
          {
            path: '/dashboard',
            routes:[
              {path: '/dashboard/analysis',component: 'Dashboard/Analysis'},
              {path: '/dashboard/monitor',component: 'Dashboard/Monitor'},
              {path: '/dashboard/workplace',component: 'Dashboard/Workplace'}
            ]
          },
          {path: 'puzzlecards', component: './puzzlecards'},
          {path: 'list', component: './list'}
        ]
      }
    ],

    //proxy: {
    //'/random_joke': {
    //  target: 'https://official-joke-api.appspot.com',
    //  changeOrigin: true,
    //  pathRewrite: {"^/random_joke": ""}
    //},
  //},
};


