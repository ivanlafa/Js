//Objetos - Destructuring con 2 o mas objetos 

const producto = {
    nombre : "Tablet",
    precio : 2000,
    disponible : true
}
const cliente = {
    nombre : "Ivan",
    premium : true
}

const {nombre,precio,disponible} = producto
const {nombre : nombreCliente ,premium} = cliente

console.log(nombre)
console.log(nombreCliente)