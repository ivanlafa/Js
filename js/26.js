// eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e=> {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    //console.log(nombre.value)
    console.log(password.value)

    if (nombre === '' || password === '') {
        console.log('todos los campos esta vacios')
    }else{
        console.log('todo correcto, enviando...')
    }

    console.log('enviaste formulario')
})

