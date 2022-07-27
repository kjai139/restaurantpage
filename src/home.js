const displayHome = () => {
    const homeBtn = document.querySelector('#homeBtn')
    homeBtn.classList.add('selected')
    homeBtn.classList.add('disabled')

    const contactBtn = document.querySelector('#contactBtn')
    const menuBtn = document.querySelector('#menuBtn')

    contactBtn.classList.remove('selected')
    menuBtn.classList.remove('selected')
    contactBtn.classList.remove('disabled')
    menuBtn.classList.remove('disabled')


    const container = document.querySelector('.mainContentContainer')

    container.textContent = ''

    const restaurantHeader = document.createElement('h1')
    restaurantHeader.classList.add('header')
    
    restaurantHeader.textContent = 'Aa Very Pretentious Restaurant'

    container.appendChild(restaurantHeader)

    const homeDescriptionContainer = document.createElement('div')
    homeDescriptionContainer.classList.add('Container')
    homeDescriptionContainer.classList.add('needsGap')

    const homeDescription = document.createElement('p')
    homeDescription.textContent = 'This restaurant has the most pretentious menu in town! The atmosphere and customer service will make you feel like you are rich as hell when you aren\'t! This is exactly the type of place you would want to be when you\'re feeling down.'

    const homeComment = document.createElement('p')
    homeComment.classList.add('homeComment')
    homeComment.textContent = '-Random Joe'

    homeDescriptionContainer.appendChild(homeDescription)
    homeDescriptionContainer.appendChild(homeComment)

    container.appendChild(homeDescriptionContainer)

    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('Container')

    const hoursContent = document.createElement('p')
    hoursContent.classList.add('hoursContent')

    hoursContent.innerHTML = '<b>Sunday:</b> 8am - 8pm\r\n<b>Monday:</b> 6am - 6pm\r\n<b>Tuesday:</b> 6am - 6pm\r\n<b>Wednesday:</b> 6am - 6pm\r\n<b>Thursday:</b> 6am - 10pm\r\n<b>Friday:</b> 6am - 10pm\r\n<b>Saturday:</b> 8am - 10pm'

    hoursContainer.appendChild(hoursContent)

    container.appendChild(hoursContainer)

    const locationContainer = document.createElement('div')
    locationContainer.classList.add('Container')

    const locationContent = document.createElement('p')
    locationContent.classList.add('locationContent')

    locationContent.textContent = '123 Pretentious Square, Richville, ON '

    locationContainer.appendChild(locationContent)
    container.appendChild(locationContainer)



}

export default displayHome