// funnciones - function declaration

//function sumar(x,y) {
//    return x + y
//}
//console.log(sumar(8,8))

function sumar(x=0,y=0){
    return{
        propiedad: x+y,
        mensaje: 'hola mundo' 
    }
    
}
const {resultado,mensaje} = sumar(20,30)
console.log(resultado)