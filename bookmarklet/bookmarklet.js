const $$ = (selector) => document.querySelectorAll(selector)
const createElement = (tagName, properties) => Object.assign(document.createElement(tagName), properties)

// Remove all CSS stylesheets, external and internal
$$('link[rel="stylesheet"],style').forEach((el) => el.remove())

// Remove all inline styles
$$('*').forEach((el) => (el.style = ''))

document.head.append(
  createElement('link', {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/gh/natanielf/canvas-dark-mode/bookmarklet/canvas-dark-mode.css'
  })
)
