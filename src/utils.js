export function row(content, styles = '') {
    return ` <div class="row no-gutters" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    const toMyString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toMyString).join(';')
}