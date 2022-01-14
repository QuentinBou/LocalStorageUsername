const body = document.querySelector('body')

function showBack(){
    let howMuch = localStorage.getItem('times')
    howMuch = parseInt(howMuch)
    let welcome = document.createElement('div')
    welcome.className = 'welcome-back'
    welcome.innerHTML = `
        <h2>Hi ${localStorage.getItem('username')} !</h2>
        <p>Happy to see you again ! <br> You came here ${howMuch} times !</p>
    `

    body.appendChild(welcome)
    let newTimes = howMuch + 1
    localStorage.setItem('times', newTimes)
}

function newUser(){
    let askPseudo = document.createElement('div')
    askPseudo.className = 'user-input'
    askPseudo.innerHTML = `
        <label for="userInput">What's your Pseudo ?</label>
        <input type="text" id="userInput">
        <button type='submit'>Confirm</button>
        `

    body.appendChild(askPseudo)

    let button = document.querySelector('button')
    button.addEventListener('click', () => {
        let username = userInput.value
        localStorage.setItem('username', username)
        localStorage.setItem('times', 1)
        body.innerHTML = ''
        Swal.fire({
            icon: 'success',
            title: `Bienvenue ${username} !`
        })
    })
}

window.addEventListener('load', () => {
    if (!localStorage.getItem('username')){
        newUser()
    }
    else {
        showBack()
    } 
})