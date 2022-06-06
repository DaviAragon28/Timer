//Utils 

const buttonChanger = (element1, element2, element3) => {
    element1.style.backgroundColor = 'rgba(0, 0, 0, 0.5';
    element1.style.color = 'white';
    element2.style.backgroundColor = 'white'
    element2.style.color = 'black';
    element3.style.backgroundColor = 'white'
    element3.style.color = 'black';
} 

const titleChanger = (title, margin) => {
    title.style = `margin-left: ${margin}`
    console.log('Working');
}

//Code

const knowLocationInitial = () => {
    location.hash = '#chronometer'
    locationHash()
}

const locationHash = () => {
    if (location.hash.startsWith('#chronometer')) {
        pageChronometer();
    } if (location.hash.startsWith('#bell')) {
        pageBell()
    } if (location.hash.startsWith('#countdown')) {
        pageHourglass()
    }
}

window.addEventListener('DOMContentLoaded', knowLocationInitial, false)
window.addEventListener('hashchange', locationHash, false)


buttonChronometer.addEventListener('click', () => {
    location.hash = '#chronometer'
})

buttonHourGlass.addEventListener('click', () => {
    location.hash = '#countdown'
    
})

buttonBell.addEventListener('click', () => {
    location.hash = '#bell'
})

const pageChronometer = () => {
    buttonChanger(buttonChronometer, buttonHourGlass, buttonBell )
    titleSection.textContent = 'Chronometer'
    titleChanger(titleSection, '25px')

}

const pageHourglass = () => {
    buttonChanger(buttonHourGlass, buttonChronometer, buttonBell)
    titleSection.textContent = 'Countdown'
    titleChanger(titleSection, '40px')
    

}

const pageBell = () => {
    buttonChanger(buttonBell, buttonChronometer, buttonHourGlass)
    titleSection.textContent = 'Alarm'
    titleChanger(titleSection, '75px')
}



