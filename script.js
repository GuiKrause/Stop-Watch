let tens = 0 
let seconds = 0
let outputSeconds = document.getElementById('seconds')
let outputTens = document.getElementById('tens')
let buttonStart = document.getElementById('buttonStart')
let buttonStop = document.getElementById('buttonStop')
let buttonReset = document.getElementById('buttonReset')
let interval

buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(() => {
        tens++
        if (tens <= 9) {
            outputTens.innerHTML = '0' + tens
        }
        if (tens > 9) {
            outputTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            outputSeconds.innerHTML = '0' + seconds
            tens = 0
            outputTens.innerHTML = '0' + tens
        }
        if (seconds > 9) {
            outputSeconds.innerHTML = seconds
        }
        if (seconds == 60) {
            clearInterval(interval)
        }
    }, 10)
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
})

buttonReset.addEventListener('click', () => {
    clearInterval(interval)
    tens = '00'
    seconds = '00'
    outputTens.innerHTML = tens
    outputSeconds.innerHTML = seconds
})
