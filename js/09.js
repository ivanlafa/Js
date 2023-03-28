//Operaciones con arreglos
 
const tecnologia = ['HTML','CSS','JAVASCRIPT','REACT','NODE.JS']

//añadir elementos al array
//tecnologia.push('GRAPHSQL')//AÑADE AL FINALD DEL ARRAY
//tecnologia.unshift('GRAPHSQL')//AÑADE AL FINALD DEL ARRAY

//const nuevoArrgelo=[...tecnologia, 'grapHQLS']//añade al principio
//const nuevoArrgelo =['grapHQLS']//añade al final

//eliminar elementos al array
//tecnologia.pop()//elimina el final
//tecnologia.shift//elimina  el incio
//tecnologia.splice(2)//elimina de una posicion
//const nuevoArray = tecnologia.filter(function (tech){
//    return tech !== 'HTML'
//})

//remplazar del array
//tecnologia[0] = 'GraphQl'

const nuevoArray = tecnologia.map(function(tech){
    if (tech === 'HTML') {
        return 'GraphQl'
    }else{
        return tech
    }
})

console.table(tecnologia)
console.table(nuevoArray)