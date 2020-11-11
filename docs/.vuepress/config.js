const path = require('path')
module.exports = {
    base:'/zoro-ui/', // github子目录
    title: 'zoro UI',
    dest: './docs/.vuepress/zoro-ui', // 修改输出位置和名字
    description: 'Inspiration from amy',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/yqh708/ht-ui/' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: true,
              children: [
                'views/guide/install.md',
                'views/guide/get-started.md'
              ]
            },
            {
              title: '设计',
              collapsable: true,
              children: [
                'views/design/color/',
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'views/components/basic/',
                'views/components/form/',
                'views/components/navigation/',
                'views/components/notice/',
                'views/components/other/'
              ]
            },
        ]
      },
    // scss:{ //配置 scss 根目录
    //   includePaths: [path.join(__dirname, '../../style')]
    // }
  }
