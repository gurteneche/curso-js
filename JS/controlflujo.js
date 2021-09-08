// control de flujo  if - else

console.log('If- else');
const edad = 5

if (edad > 5 && edad < 18) {
	console.log('Puede ingresar');
} else {
	console.log('No puede ingresar :(');
}

// control de flujo  While
console.log('While');
let x = 0

while (x <= 5) {
	console.log(x)
    x++
}

console.log('termino el loop');

// Control de flujo  Switch. No es necesario usar llaves. es opcional
console.log('Switch');
switch (20) {
	case 1: {
		console.log('Opción 1');
		break;
	}
	case 2: {
		console.log('Opción 2');
		break;
	}
	case 3:
		console.log('Opción 3');
		break;

	default:
	    console.log('No hay opción elegida');
	    break;
}


// Control de flujo  For. 
console.log('For');

for (let i = 0; i < 10; i++) {
	console.log(i)
}

// Acceder a un arreglo
// los arreglos tienen una propiedad de len o longitud. Y siempre comienzan de la posición 0

console.log('Accedo a un arreglo');
const numeros = [1, 2, 3, 'hola', 5]


for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i])
}

// puedo reemplazar i <= 4 por numeros.length