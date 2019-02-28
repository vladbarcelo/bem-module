import { kebabCase, getModifiers } from '@verstaerker/vue-bem/src/modules/utils'
import { DEFAULT_BLOCK_SOURCE } from '@verstaerker/vue-bem/src/modules/shared'
import { addClass } from './helpers'

export function getSSRDirective(bemOptions) {
  return function (vnode, binding) {
    const hyphenateBlockAndElement =
      bemOptions.hyphenate === true ||
      (bemOptions.hyphenate || {}).blockAndElement ||
      false
    const hyphenateModifier =
      bemOptions.hyphenate === true ||
      (bemOptions.hyphenate || {}).modifier ||
      false
    const modifiers = binding.value
    const { $options } = vnode.context
    let block = $options[DEFAULT_BLOCK_SOURCE]
    let element = binding.arg
    if (hyphenateBlockAndElement) {
      block = kebabCase(block)
      if (element) {
        element = kebabCase(element)
      }
    }
    if (!binding.modifiers) {
      binding.modifiers = {}
    }
    const calculatedBem = {
      modifiers,
      staticModifiers: Object.keys(binding.modifiers).length
        ? binding.modifiers
        : null,
      className:
        block + (element ? bemOptions.delimiters.element + element : '')
    }
    const modifierClasses = Object.assign(
      {},
      calculatedBem.staticModifiers,
      calculatedBem.modifiers
    )
    addClass(vnode, calculatedBem.className)
    getModifiers(
      calculatedBem.className,
      modifierClasses,
      bemOptions.delimiters,
      hyphenateModifier
    ).forEach(modifier => addClass(vnode, modifier))
  }
}
