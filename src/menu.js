import item1 from './images/item1.jpeg'
import item2 from './images/russo-baltique.jpg'

import foodItem1 from './images/caviar.jpeg'
import foodItem2 from './images/goldflakes.jpeg'


const createMenu = () => {
    const menuBtn = document.querySelector('#menuBtn')
    menuBtn.classList.add('selected')
    menuBtn.classList.add('disabled')

    const homeBtn = document.querySelector('#homeBtn')
    const contactBtn = document.querySelector('#contactBtn')

    homeBtn.classList.remove('selected')
    contactBtn.classList.remove('selected')
    homeBtn.classList.remove('disabled')
    contactBtn.classList.remove('disabled')

    const container = document.querySelector('.mainContentContainer')

    container.textContent = ''


    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Menu'
    menuHeader.classList.add('header')

    
    container.appendChild(menuHeader)


    const drinksContainer = document.createElement('div')
    drinksContainer.classList.add('Container')
    drinksContainer.setAttribute('id', 'drinksContainer')
    
    const drinksHeader = document.createElement('h2')
    drinksHeader.classList.add('subHeader')
    drinksHeader.textContent = 'Drinks'

    drinksContainer.appendChild(drinksHeader)

    const itemsContainer = document.createElement('div')
    itemsContainer.classList.add('Container')
    itemsContainer.setAttribute('id', 'itemsContainer')

    const item1Container = document.createElement('div')
    item1Container.classList.add('Container')
    item1Container.classList.add('needsGap')

    const item1Title = document.createElement('p')
    item1Title.classList.add('itemTitle')
    item1Title.textContent = 'Da Hong Pao Tea'

    const item1Description = document.createElement('p')
    item1Description.classList.add('itemDescription')
    item1Description.textContent = `It's a very high quality tea that costs 600k a pound.`

    const item1Price = document.createElement('p')
    item1Price.classList.add('Price')
    item1Price.innerHTML = '<b>$1000</b>'

    const item1Img = document.createElement('img')
    item1Img.classList.add('itemImg')
    item1Img.setAttribute('src', item1)

    item1Container.appendChild(item1Title)
    item1Container.appendChild(item1Description)
    item1Container.appendChild(item1Price)
    item1Container.appendChild(item1Img)

    itemsContainer.appendChild(item1Container)
    container.appendChild(drinksContainer)
    container.appendChild(itemsContainer)

    const item2Container = document.createElement('div')
    item2Container.classList.add('Container')
    item2Container.classList.add('needsGap')

    const item2Title = document.createElement('p')
    item2Title.classList.add('itemTitle')
    item2Title.textContent = 'Russo Baltique Vodka'

    const item2Description = document.createElement('p')
    item2Description.classList.add('itemDescription')
    item2Description.textContent = `It's a very expensive vodka with gold and silver.`

    const item2Price = document.createElement('p')
    item2Price.classList.add('Price')
    item2Price.innerHTML = '<b>$10,000</b>'

    const item2Img = document.createElement('img')
    item2Img.classList.add('itemImg')
    item2Img.setAttribute('src', item2)

    item2Container.appendChild(item2Title)
    item2Container.appendChild(item2Description)
    item2Container.appendChild(item2Price)
    item2Container.appendChild(item2Img)

    itemsContainer.appendChild(item2Container)
    
    // food menu

    const foodsContainer = document.createElement('div')
    foodsContainer.classList.add('Container')
    foodsContainer.setAttribute('id', 'foodsContainer')
    
    const foodsHeader = document.createElement('h2')
    foodsHeader.classList.add('subHeader')
    foodsHeader.textContent = 'Food'

    foodsContainer.appendChild(foodsHeader)

    const foodItemsContainer = document.createElement('div')
    foodItemsContainer.classList.add('Container')
    foodItemsContainer.setAttribute('id', 'foodItemsContainer')

    const foodItem1Container = document.createElement('div')
    foodItem1Container.classList.add('Container')
    foodItem1Container.classList.add('needsGap')

    const foodItem1Title = document.createElement('p')
    foodItem1Title.classList.add('itemTitle')
    foodItem1Title.textContent = 'Caviar'

    const foodItem1Description = document.createElement('p')
    foodItem1Description.classList.add('itemDescription')
    foodItem1Description.textContent = `It's a must-have in fine dining`

    const foodItem1Price = document.createElement('p')
    foodItem1Price.classList.add('Price')
    foodItem1Price.innerHTML = '<b>$500</b>'

    const foodItem1Img = document.createElement('img')
    foodItem1Img.classList.add('itemImg')
    foodItem1Img.setAttribute('src', foodItem1)

    foodItem1Container.appendChild(foodItem1Title)
    foodItem1Container.appendChild(foodItem1Description)
    foodItem1Container.appendChild(foodItem1Price)
    foodItem1Container.appendChild(foodItem1Img)

    foodItemsContainer.appendChild(foodItem1Container)
    container.appendChild(foodsContainer)
    container.appendChild(foodItemsContainer)

    //food item 2

    const foodItem2Container = document.createElement('div')
    foodItem2Container.classList.add('Container')
    foodItem2Container.classList.add('needsGap')

    const foodItem2Title = document.createElement('p')
    foodItem2Title.classList.add('itemTitle')
    foodItem2Title.textContent = 'Gold Flakes'

    const foodItem2Description = document.createElement('p')
    foodItem2Description.classList.add('itemDescription')
    foodItem2Description.textContent = `It's literally gold. Who wouldn't want to eat it?`

    const foodItem2Price = document.createElement('p')
    foodItem2Price.classList.add('Price')
    foodItem2Price.innerHTML = '<b>$2000</b>'

    const foodItem2Img = document.createElement('img')
    foodItem2Img.classList.add('itemImg')
    foodItem2Img.setAttribute('src', foodItem2)

    foodItem2Container.appendChild(foodItem2Title)
    foodItem2Container.appendChild(foodItem2Description)
    foodItem2Container.appendChild(foodItem2Price)
    foodItem2Container.appendChild(foodItem2Img)

    foodItemsContainer.appendChild(foodItem2Container)



}

export default createMenu