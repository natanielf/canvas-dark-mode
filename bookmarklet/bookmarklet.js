const $$ = (selector) => document.querySelectorAll(selector)
const createElement = (tagName, properties) => Object.assign(document.createElement(tagName), properties)

document.head.append(
    createElement('link', {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/natanielf/canvas-dark-mode/bookmarklet/canvas-dark-mode.css'
    })
)
