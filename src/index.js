import {modal} from './modal'
import {Site} from "./classes/site";
import {Sidebar} from "./classes/sidebar";
import './styles/main.css'

const site = new Site('#site')

const updateCallback = newBlock => {
    modal.push(newBlock)
    site.render(modal)
}

new Sidebar('#panel', updateCallback)
site.render(modal)