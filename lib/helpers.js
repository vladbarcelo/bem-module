export function addClass(vnode, className) {
  if (vnode.data.staticClass) {
    vnode.data.staticClass += ` ${className}`
  } else {
    vnode.data.staticClass = `${className}`
  }
}
