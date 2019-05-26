const { inject } = require('./plugins/markdown.js')

const isDev = process.env.NODE_ENV === 'development'

const siteVariables = {
  PACKAGE_URL: isDev
    ? 'http://localhost:3001'
    : 'https://unpkg.com/@meleyal/gen'
}

const siteConfig = {
  title: 'Gen.js',
  tagline: 'Generative Music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: '/gen/',
  projectName: 'gen',
  organizationName: 'meleyal',
  headerLinks: [
    { doc: 'introduction', label: 'Docs' },
    { doc: 'api/index', label: 'API' },
    {
      href: 'https://github.com/meleyal/gen',
      label: 'GitHub'
    }
  ],
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#b263f9',
    secondaryColor: '#444444'
  },
  highlight: {
    theme: 'github'
  },
  usePrism: true,
  onPageNav: 'separate',
  docsSideNavCollapsible: false,
  cleanUrl: true,
  enableUpdateTime: true,
  scripts: ['/gen/js/custom.js', `${siteVariables.PACKAGE_URL}/gen.js`],
  markdownPlugins: [inject(siteVariables)]
}

module.exports = siteConfig
