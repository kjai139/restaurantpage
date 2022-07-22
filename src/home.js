const displayHome = () => {
    const container = document.querySelector('.mainContentContainer')

    const restaurantHeader = document.createElement('h1')
    restaurantHeader.classList.add('restaurantHeader')
    restaurantHeader.setAttribute('style', 'white-space: pre;')
    restaurantHeader.textContent = 'A Very Pretentious Restaurant'

    container.appendChild(restaurantHeader)

    const homeDescriptionContainer = document.createElement('div')
    homeDescriptionContainer.classList.add('homeDescriptionContainer')

    const homeDescription = document.createElement('p')
    homeDescription.textContent = 'This restaurant has the most pretentious menu in town! The atmosphere and customer service will make you feel like you are rich as hell when you aren\'t! This is exactly the type of place you would want to be when you\'re feeling down.'

    const homeComment = document.createElement('p')
    homeComment.classList.add('homeComment')
    homeComment.textContent = 'Random Joe'

    homeDescriptionContainer.appendChild(homeDescription)
    homeDescriptionContainer.appendChild(homeComment)

    container.appendChild(homeDescriptionContainer)

    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hoursContainer')

    const hoursContent = document.createElement('p')
    hoursContent.classList.add('hoursContent')

    hoursContent.textContent = 'Sunday: 8am - 8pm \r\n Monday: 6am - 6pm \r\n Tuesday: 6am - 6pm \r\n Wednesday: 6am - 6pm \r\n Thursday: 6am - 10pm \r\n Friday: 6am - 10pm \r\n Saturday: 8am - 10pm'

    hoursContainer.appendChild(hoursContent)

    container.appendChild(hoursContainer)

    const locationContainer = document.createElement('div')
    locationContainer.classList.add('locationContainer')

    const locationContent = document.createElement('p')
    locationContent.classList.add('locationContent')

    locationContent.textContent = '123 Pretentious Square, Richville, ON '

    locationContainer.appendChild(locationContent)
    container.appendChild(locationContainer)



}

export default displayHome