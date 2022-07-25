import createPage from './pageload.js'
import './style.css'
import createHome from './home.js'
import createMenu from './menu.js'


createPage()
createHome()


const menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('click', createMenu)