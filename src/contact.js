const createContact = () => {
    const container = document.querySelector('.mainContentContainer')

    container.textContent = ''


    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Contact us'
    menuHeader.classList.add('header')

    
    container.appendChild(menuHeader)

    const homeDescriptionContainer = document.createElement('div')
    homeDescriptionContainer.classList.add('Container')
    homeDescriptionContainer.classList.add('needsGap')

    const homeDescription = document.createElement('p')
    homeDescription.innerHTML = 'Owner\r\n234-343-2324\r\n123RestaurantPretentious@real.com'

    const homeComment = document.createElement('p')
    homeComment.classList.add('homeComment')
    homeComment.textContent = 'Most Pretentious Restaurant Owner'

    homeDescriptionContainer.appendChild(homeComment)

    homeDescriptionContainer.appendChild(homeDescription)
    

    container.appendChild(homeDescriptionContainer)

    //2

    const info2Container = document.createElement('div')
    info2Container.classList.add('Container')
    info2Container.classList.add('needsGap')

    const info2Description = document.createElement('p')
    info2Description.innerHTML = 'Manager\r\n235-344-2325\r\n123RestaurantPretentious@real.com'

    const info2Comment = document.createElement('p')
    info2Comment.classList.add('homeComment')
    info2Comment.textContent = 'Most Pretentious Restaurant Owner'

    info2Container.appendChild(info2Comment)

    info2Container.appendChild(info2Description)
    

    container.appendChild(info2Container)

}

export default createContact