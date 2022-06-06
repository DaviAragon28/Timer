//SetInterval - SetTimeout

// const myInterval = setInterval(() => {
//     console.log('ha pasado un segundo');
// }, 1000);



// setTimeout(() => {
//     console.log('Se borró el interval');
//     clearInterval(myInterval)
// }, 4000)

let currentChronometer
let secondValue = 0;
let minutesValue = 0
let currentButton;

//Utils
const formatValue = (value) => {
    return  (`0${value}`).slice(-2);

}

const startChronometer =  () => {
    currentButton = event.target;
    currentButton.disabled = true;
    currentChronometer = setInterval(() => {
        secondValue += 1;
        if (secondValue === 59) {  
            secondValue = 0
            minutesValue += 1 
            minutesSpan.textContent = formatValue(minutesValue);
        }
        secondsSpan.textContent = formatValue(secondValue);
    }, 1000)
}

const stopChronometer = () => {
    if (currentButton) {
        currentButton.disabled = false
    }
    clearInterval(currentChronometer)
}

const resetChronometer = () => {
    secondValue = 0;
    minutesValue = 0
    secondsSpan.textContent = '00';
    minutesSpan.textContent = '00';
}

