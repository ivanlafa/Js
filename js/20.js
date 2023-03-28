//manipular elementos HTML conn JS

//const heading = document.querySelector('.heading')

//console.log(heading.textContent)

//heading.textContent = 'nuevo heading'

//const inputNombre = document.querySelector('#nombre')
//inputNombre.value = 'un valor por default'

//const enlaces = document.querySelectorAll('.navegacion a')
//enlaces.forEach(enlace=>enlace.textContent = 'Nuevo Enlace')

//const heading = document.querySelector('.heading')
//heading.addEventListener('click', clickHeading)

//function clickHeading(){
  //  console.log('diste click en heading')
//}

const heading = document.querySelector('.heading')
heading.addEventListener('click',()=>{
    heading.textContent = 'Nuevo heading al dar click'
})

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => {
    enlace.addEventListener('click',()=>{
        console.log('Diste click en un enlace')
    })
});

