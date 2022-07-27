import createPage from './pageload.js'
import './style.css'
import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'


createPage()
createHome()


const menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('click', createMenu)

const contactBtn = document.querySelector('#contactBtn')
contactBtn.addEventListener('click', createContact)

const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', createHome)