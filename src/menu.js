import item1 from './item1.jpeg'


const createMenu = () => {
    const container = document.querySelector('.mainContentContainer')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')

    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Menu'
    menuHeader.classList.add('menuHeader')

    menuContainer.appendChild(menuHeader)
    container.appendChild(menuContainer)


    const drinksContainer = document.createElement('div')
    drinksContainer.classList.add('drinksContainer')
    
    const drinksHeader = document.createElement('h2')
    drinksHeader.classList.add('drinksHeader')
    drinksHeader.textContent = 'Drinks'

    const item1Container = document.createElement('div')
    item1Container.classList.add('item1Container')

    const item1Title = document.createElement('p')
    item1Title.classList.add('item1Title')
    item1Title.textContent = 'Da Hong Pao Tea'

    const item1Description = document.createElement('p')
    item1Description.classList.add('item1Description')
    item1Description.textContent = `It's a very high quality tea that costs 600k a pound.`

    const item1Price = document.createElement('p')
    item1Price.classList.add('item1Price')
    item1Price.innerHTML = '<b>$1000</b>'

    const item1Img = document.createElement('img')
    item1Img.classList.add('item1Img')
    item1Img.setAttribute('src', item1)




}

export default createMenu