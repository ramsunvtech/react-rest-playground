const getAliasPath = (path = '') => {
  return `./src/${path}`
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@/blocks': getAliasPath('components/blocks'),
        '@/ui': getAliasPath('components/ui'),
        '@/hooks': getAliasPath('hooks'),
        '@/utils': getAliasPath('utils'),
        '@/styles': getAliasPath('styles')
      }
    }]
  ]
}