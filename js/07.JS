//unir dos objetos o mas 

const producto = {
    nombre : "Tablet",
    precio : 2000,
    disponible : true
}
const cliente = {
    nombre : "Ivan",
    premium : true
}

//const nuevoObjeto = Object.assign(producto,cliente)
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}


console.log(nuevoObjeto2)
console.log(nuevoObjeto)