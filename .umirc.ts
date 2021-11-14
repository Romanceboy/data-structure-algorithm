import { defineConfig } from 'dumi'

export default defineConfig({
  title: '数据结构和算法课',
  outputPath: 'docs/dist',
  mode: 'site',
  publicPath: 'https://art-design-ui.github.io/data-structure-algorithm/',
  base: '/data-structure-algorithm/',
  locales: [
    ['zh', '中文'],
    ['en', 'English']
  ],
  theme: {
    '@c-primary': '#007bff'
  },
  resolve: {
    includes: ['docs'],
    previewLangs: []
  },
  // 如果开启 注意修复外部client的mock文件名
  mock: false,
  navs: {
    en: [
      null,
      {
        title: 'GitHub',
        path: 'https://art-design-ui.github.io/data-structure-algorithm/'
      }
    ],
    zh: [
      null,
      {
        title: 'GitHub',
        path: 'https://art-design-ui.github.io/data-structure-algorithm/'
      }
    ]
  },
  logo: false,
  exportStatic: {}
})
