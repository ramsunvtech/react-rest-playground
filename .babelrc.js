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
    ['@babel/plugin-proposal-optional-chaining'],
    ['module-resolver', {
      alias: {
        '@/blocks': getAliasPath('components/blocks'),
        '@/ui': getAliasPath('components/ui'),
        '@/styled': getAliasPath('components/styled'),
        '@/hooks': getAliasPath('hooks'),
        '@/utils': getAliasPath('utils'),
        '@/styles': getAliasPath('styles')
      }
    }],
    ['styled-components']
  ]
}