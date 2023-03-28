///objetos

//Objetos - Manipulacion

const producto = {
    nombre : "Tablet",
    precio : 2000,
    disponible : true
}
//si no quiero que nadie me modifique el objeto 
//Object.freeze(producto) -- no me deja modificar
//Object.seal(producto) -- modificar propiedades existentes, no permite ni añadir ni eliminar


//reescribir un valor
producto.nombre = "Monitor"
//si no existe, lo va añadir
producto.imagen = "imagen.jpg"


//eliminar 
delete producto.disponible

console.table(producto)