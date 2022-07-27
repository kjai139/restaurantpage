let createHomePage = () => {
    console.log('createHomepage Loaded')
    const outerDiv = document.querySelector('#content')
    const topBarDiv = document.createElement('div')
    topBarDiv.classList.add('topBarDiv')

    outerDiv.appendChild(topBarDiv)

    const homeBtn = document.createElement('button')
    homeBtn.classList.add('topBarBtn')
    homeBtn.setAttribute('id', 'homeBtn')
    homeBtn.textContent = 'Home'

    const menuBtn = document.createElement('button')
    menuBtn.classList.add('topBarBtn')
    menuBtn.setAttribute('id', 'menuBtn')
    menuBtn.textContent = 'Menu'

    const contactBtn = document.createElement('button')
    contactBtn.classList.add('topBarBtn')
    contactBtn.setAttribute('id', 'contactBtn')
    contactBtn.textContent = 'Contact Us'

    
    
    topBarDiv.appendChild(homeBtn)
    topBarDiv.appendChild(menuBtn)
    topBarDiv.appendChild(contactBtn)

    const contentContainer = document.createElement('div')
    contentContainer.classList.add('contentContainer')

    const mainContentContainer = document.createElement('div')
    mainContentContainer.classList.add('mainContentContainer')

    contentContainer.appendChild(mainContentContainer)
    outerDiv.appendChild(contentContainer)

    




}

export default createHomePage