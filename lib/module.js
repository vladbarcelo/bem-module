import { resolve } from 'path'
import { set } from 'lodash'
import { getSSRDirective } from './ssrDirective'

module.exports = function BemModule(moduleOptions) {
  let bemOptions = {
    delimiters: {
      element: '__',
      modifier: '_',
      value: '_'
    },
    hyphenate: {
      blockAndElement: true,
      modifier: true
    }
  }
  if (moduleOptions && moduleOptions.bemOptions) {
    bemOptions = moduleOptions.bemOptions
  }
  set(
    this.options,
    'render.bundleRenderer.directives.bem',
    getSSRDirective(bemOptions)
  )
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    options: bemOptions
  })
}
