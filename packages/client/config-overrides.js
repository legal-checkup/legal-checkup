const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    fieldName: false
  })

  config = rewireInlineImportGraphqlAst(config, env)
  config = rewireEslint(config, env)

  return config
}
