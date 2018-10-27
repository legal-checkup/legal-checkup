'use strict'

module.exports = {
  presets: ['latest', '@babel/preset-env', '@babel/preset-react'],
  plugins: ['transform-runtime', 'transform-async-generator-functions', 'transform-object-rest-spread']
}
