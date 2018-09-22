const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = function override (config, env) {
  config = rewireStyledComponents(config, env, {
    fieldName: false
  })

  config = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    '@responsive': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@state': path.resolve(__dirname, `${paths.appSrc}/state/`),
    '@utilities': path.resolve(__dirname, `${paths.appSrc}/utilities/`),
    '@wrappers': path.resolve(__dirname, `${paths.appSrc}/wrappers/`)
  })(config, env)

  return config
}
