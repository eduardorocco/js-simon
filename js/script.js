//COUNTDOWN

const countDown = document.getElementById('countdown')

console.log(countDown)

let count = 10

const timer = setInterval(() => {

    countDown.innerHTML = count

    count--

  
    if (count < 0) {

        clearInterval(timer)

    }

    if (count === -1) {

        countDown.innerHTML = 'Tempo scaduto!'

    }

  

}, 1000);


