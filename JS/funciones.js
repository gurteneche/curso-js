// hay dos formas de representar una función

//function iterar(argumento1) {

//	for (let i = 0; i < argumento1.length; i++) {
//		console.log(argumento1[i])
//	}
//}

//const numeros = [1, 2, 3, 'hola', 5]
//const nombres = ['pedro', 'juan', 'guillermo']

//iterar(numeros)
//iterar(nombres)

function suma(a, b) {
	//console.log(a+b)
	return a+b;
} 

suma(4,5)

// otra forma

const resultadoSuma = suma(4, 8)
console.log('El resultado de la suma es:', resultadoSuma);

// otras formas

const resultadoSuma1 = suma(4, 8)
const resultadoSuma2 = suma(4, 8)
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
console.log('El resultado de la suma es:', resultadoSuma3);

// callback es una función que se ejecuta al final de una función
// cb es el callback. cb, Es una función
// las funciones en JavaScript son valores, por eso se pueden pasar como argumento a otras funciones

function sumar(a, b, cb) {
	const resul=a + b
	cb(resul)
}

function callback(resultado) {
	console.log('el resultado es: ', resultado)
}

sumar(2, 3, callback)

// fat arrow functions
// no es necesario declararlas con la palabra reservada function y tienen un return implicito

const miFatArrowFunction = (a, b) => a + b 
const r = miFatArrowFunction(1, 3)
console.log('el resultado es: ', r)

// otra forma

const otraFAF = (a, b) => {
	return a + b
}

const r1 = miFatArrowFunction(8, 3)
console.log('el resultado es: ', r1)


// funciones anonimas
// no tiene nombre. se usan cuando se ejecutan por otra funcion como por ejemplo en los call backs


sumar(2, 3, function (r) {
	console.log('Función Anónima - el resultado es: ', r)
})