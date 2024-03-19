const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/p/:slug*',
        destination: 'https://substack.provablysafe.ai/p/:slug*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/archive',
        destination: 'https://substack.provablysafe.ai/archive',
        basePath: false,
        permanent: true,
      },
    ]
  },
})
