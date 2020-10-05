import {col, row} from "../utils";

class Block {
    constructor(value, option) {
        this.value = value
        this.option = option
    }

    toHTML() {
        throw new Error('Метод toHTML должен бути реалізован!')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h2', styles} = this.option
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.option
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`
        return row(html, styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const styles = this.option.styles
        return row(col(`<p class="mb-0">${this.value}</p>`), styles)
    }
}

export class textColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const styles = this.option.styles
        const html = this.value.map(item => col(item))
        return row(html.join(''), styles)
    }
}