///objetos

//const nombre = "Tablet"
//const precio = 2000
//const disponible = true


const producto = {
    nombre : "Tablet",
    precio : 2000,
    disponible : true
}

console.log(producto)
console.table(producto)

//console.log(producto.nombre)

//Destructuring
const { nombre,precio,disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Objecft literal enhacement

const autenticado = true
const usuario = "Ivan"

const NuevoObjeto = {
    autenticado,
    usuario
}

console.table(NuevoObjeto)