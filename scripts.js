let numbers = ['','']
let i = 0


function clicked7() {
    numbers[i] += '7'
    document.querySelector('.total-container').textContent = numbers[i]
}

function clicked8() {
    numbers[i] += '8'
    document.querySelector('.total-container').textContent = numbers[i]
}

function clicked9() {
    numbers[i] += '9'
    document.querySelector('.total-container').textContent = numbers[i]
}

function del() {
    numbers[i] = numbers[i].slice(0, numbers[i].length -1)
    document.querySelector('.total-container').textContent = numbers[i]
}

function clicked4() {
    numbers[i] += '4'
    document.querySelector('.total-container').textContent = numbers[i]
}

function clicked5() {
    numbers[i] += '5'
    document.querySelector('.total-container').textContent = numbers[i]
}

function clicked6() {
    numbers[i] += '6'
    document.querySelector('.total-container').textContent = numbers[i]
}

document.querySelector('#button-7').addEventListener("click", clicked7)
document.querySelector('#button-8').addEventListener("click", clicked8)
document.querySelector('#button-9').addEventListener("click", clicked9)
document.querySelector('#button-del').addEventListener("click", del)
document.querySelector('#button-4').addEventListener("click", clicked4)
document.querySelector('#button-5').addEventListener("click", clicked5)
document.querySelector('#button-6').addEventListener("click", clicked6)