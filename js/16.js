const tecnologia = ['HTML','CSS','JAVASCRIPT','REACT','NODE.JS']
const numero = [10,20,30]
let nuevoArray;

//filter
const nuevoArray2 = tecnologia.filter(tech => { tech === 'HTML'})

//const resultado = tecnologia.includes('GraphQl')
//comprobar si un elemento existe en el array

//some devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)

//find - devuelve el primero elemento que cumpla la condicion
//const resultado = numeros.find(numero => numero > 15)

// every - retorna true o false si todos cumplen la condicion
//const resultado = numeros.every(numero => numero > 15)

//reduce-acumulaando en el total
//const resultado = numeros.reduce((total,numero) => numero+total,0)

// filter - crea un nuevo array en base a una condicion
//const resultado = tecnologia.filter(tech => tech === 'Node.js')
//const resultado = tecnologia.filter(numero => numero !== 10)

const arrayForeach = tecnologia.forEach((tech,index) => console.log(index))

  
  //crear nuevo arreglo
  const arrayMap = tecnologia.map (tech => tech)

  console.log(arrayMap)

