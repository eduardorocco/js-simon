//COUNTDOWN/////////////////////////////////////////////////////////

const countDown = document.getElementById('countdown')

//console.log(countDown)

const instructions = document.getElementById('instructions')

const answersForm = document.getElementById('answers-form')

let count = 10

const timer = setInterval(() => {

    countDown.innerHTML = count

    count--

  
    if (count < 0) {

        clearInterval(timer)

        numberList.classList.add("d-none")

        
    }

    if (count === -1) {

        countDown.classList.add("d-none")

        instructions.innerHTML = "Indovina i numeri corretti:"

        answersForm.classList.toggle("d-none")
  
    }

}, 1000);









//FUNCTION: RANDOM NUMBERS BY 1 AT 50/////////////////////////////////

function randomNum50() {

    return Math.floor(Math.random() * 50) + 1
}

//console.log(randomNum50())


//RANDOM NUMBERS CYCLE///////////////////////////////////////////////


//LIST NUMBER

const numberList = document.getElementById("numbers-list")

//console.log(liElement)

/* creare 5 <li> per la <ul> che genere 5 numeri randomici con la funzione */

for (let i = 0; i < 5; i++) {


    //CONST

    const liElement = document.createElement("li")

    const number = document.createTextNode(randomNum50())

    liElement.appendChild(number)

    numberList.appendChild(liElement)

    console.log(i, liElement)


}



