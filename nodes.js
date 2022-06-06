//Buttons
const buttonStart = document.getElementById('buttonStart')
const buttonStop = document.getElementById('buttonStop')
const buttonReset = document.getElementById('buttonReset')
const buttonChronometer = document.querySelector('.button--clock')
const buttonHourGlass = document.querySelector('.button--hourglass')
const buttonBell = document.querySelector('.button--bell')


//Tags
const minutesSpan = document.querySelector('.minutes')
const secondsSpan = document.querySelector('.seconds')
const titleSection = document.querySelector('h1')



buttonStart.addEventListener('click', () => {
    startChronometer()
    console.log('Start');
})

buttonStop.addEventListener('click', () => {
    stopChronometer()
    console.log('Stop');

})

buttonReset.addEventListener('click', () => {
    stopChronometer()
    resetChronometer()
    console.log('Reset');

})