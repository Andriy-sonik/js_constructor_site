import image from './assets/vue.png'
import {textColumnsBlock, TitleBlock, ImageBlock, TextBlock} from './classes/blocks'
import {css} from "./utils";

export const modal = [
    new TitleBlock('Конструктор сайта на чистом JavaScript!', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new TextBlock('Цей додаток написаний в навчальних планах', {
        styles: 'background: darkblue; color: yellow; text-align: center; border-top: 1px solid #fff; border-bottom: 1px solid #fff;'
    }),
    new textColumnsBlock([
        'Додаток на чистом JavaScript',
        'Без сторонніх бібліотек',
        'ООП',
    ], {
        styles: 'padding: 1rem; background: #6f42c1; color: #fff; text-align: center;'
    }),
    new ImageBlock(image, {
        alt: 'image vue.js',
        imageStyles: 'max-width:100%; height: auto;'
    })
]