let numbers = ['', '', '']
let i = 0

const inputContainer = document.querySelector('.input-container')

inputContainer.addEventListener("click", (event) => {
    if (event.target.tagName === 'DIV') {
        if (numbers[i].length < 15) {
            if (Number.isInteger(parseInt(event.target.textContent)  )) {
                numbers[i] += event.target.textContent
                document.querySelector('.total-container').textContent = numbers[i]
            }

            if (event.target.textContent === '.') {
                if (!numbers[i].includes('.')) {
                    numbers[i] += '.'
                    document.querySelector('.total-container').textContent = numbers[i]
                }
            }
        }
        
        if (['+', '-', '/', 'x'].includes(event.target.textContent)) {
            numbers[2] = event.target.textContent
            i = 1
            document.querySelector('.total-container').textContent = event.target.textContent
        }

        if (event.target.textContent === 'DEL') {
            console.log(i)
            if (i === 1 && document.querySelector('.total-container').textContent === '0') {
                numbers[0] = ''
                i = 0
            }
            
            if (i === 1 && parseFloat(numbers[1]) != 0) {
                numbers[1] = ''
                document.querySelector('.total-container').textContent = 0

            } 

            if (i === 0) {
                numbers[0] = ''
                document.querySelector('.total-container').textContent = 0
            }
        }

        if (event.target.textContent === 'RESET') {
            i = 0
            numbers = ['', '', '']
            document.querySelector('.total-container').textContent = 0
        }

        if (event.target.textContent === '=') {
            if (!numbers.includes('')) {
                if (numbers[2] === '+') {
                    numbers[0] = (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString()
                    if (numbers[0].length >= 15) {
                        numbers[0] = 'Error'
                    }
                }
    
                if (numbers[2] === '-') {
                    numbers[0] = (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString()
                    if (numbers[0].length >= 15) {
                        numbers[0] = 'Error'
                    }
                }
    
                if (numbers[2] === '/') {
                    numbers[0] = (parseFloat(numbers[0]) / parseFloat(numbers[1])).toString()
                    if (numbers[0].length >= 15) {
                        numbers[0] = numbers[0].slice(0, 15)
                    }
                }
    
                if (numbers[2] === 'x') {
                    numbers[0] = (parseFloat(numbers[0]) * parseFloat(numbers[1])).toString()
                    if (numbers[0].length >= 15) {
                        numbers[0] = 'Error'
                    }
                }
    
                document.querySelector('.total-container').textContent = numbers[0]
                
                numbers[1] = ''
                numbers[2] = ''

                i = 0
            }
        }

        console.log(numbers)
    }
})

