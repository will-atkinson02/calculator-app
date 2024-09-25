document.querySelectorAll('input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', checkRadioSelected)
})

function checkRadioSelected() {
    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="theme"]:checked')
    
    if (selectedOption) {

        if (selectedOption.id === 'theme1') {
            console.log('theme 1')
            document.body.classList.remove('theme-2')
            document.body.classList.remove('theme-3')
        }
    
        if (selectedOption.id === 'theme2') {
            console.log('theme 2')
            document.body.classList.add('theme-2')
            document.body.classList.remove('theme-3')
        }
    
        if (selectedOption.id === 'theme3') {
            console.log('theme 3')
    
            document.body.classList.add('theme-3')
            document.body.classList.remove('theme-2')
        }
    }
}