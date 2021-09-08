console.log('Hola Mundo')

// Tipos de datos en JS
// string, - Boolean, 
// Null: - Number
// Undefines. Es una variable no definida
// Object: objeto.

// definicion de variables
//var
//let
//const

// var miPrimeraVariable = 'lala' se trata de no usar porque puede generar un comportamiento incorrecto

let miPrimeraVariable = 'Mi primera variable !'
console.log(miPrimeraVariable);

// mutabilidad: Cambio o reasignacion de valores a variables
// cuando se define una variable se hace siempre con una letra A-Z

let MiBoolean = true
let miOtroBoolean = false
let miNumero = -20

console.log(MiBoolean);
console.log(miOtroBoolean);
console.log(miNumero);

console.log(MiBoolean, miOtroBoolean, miNumero)

let undef
console.log(undef);

let nulo = null
console.log(nulo);

// objeto: Agrupacion de datos con sentido entre si
// objeto vacio
const miPrimerObjeto = {}

// objeto: Propiedades
// const es de constante, es un tipo de variable

const miObjeto = {
	unNumero: 12,
	unString: 'Cadena de caracteres',
	unaCondicion: true,

}

// imprimir todo el objeto
console.log(miObjeto);

// imprimir una propiedad del objeto
console.log(miObjeto.unNumero);

// arreglos
// pueden contener valores de cualquier tipo

const arregloVacio = []
const arregloConDatos = [1, 2, "Hola mundo", miObjeto]

console.log(arregloVacio, arregloConDatos);

// agrego un dato a un arreglo

arregloConDatos.push(5)
console.log(arregloConDatos);