const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Laravel Turbo',
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    displayAllHeaders: true,
    activeHeaderLinks: false,
    searchPlaceholder: 'Press / to search',

    repo: 'laravel-turbo',
    docsRepo: 'laravel-turbo/docs',
    docsDir: '',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Laravel Turbo',
          collapsable: false,
          children: [
            '',
            'credits'
          ]
        },
        {
          title: 'Jetstream Turbo',
          collapsable: false,
          children: [
            'jetstream-turbo/introduction',
            'jetstream-turbo/installation',
            'jetstream-turbo/features'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
