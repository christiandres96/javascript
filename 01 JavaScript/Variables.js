console.log('hola mundo');
var nombre = 'Christian';
var edad = 28;
var peso = 305.1;
var casado = false;
var fechaNAcimiento = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;
if (noExisto) {
    console.log('verdadero');
} else {
    console.log('falso');
}

console.log(noEstoyDefinido);

var a = -1;
var b = 0;
var c = 1;

if (a) {
    console.log('verdadero');
} else {
    console.log('falso');
}


if (b) {
    console.log('verdadero');
} else {
    console.log('falso');
}


if (c) {
    console.log('verdadero');
} else {
    console.log('falso');
}

//Json

var usuario = {
    "nombre": 'Christian5',
    apellido: 'Chicaiza',
    cedula: '1721962072',
    edad: 22,
    imprimir: function () {
        console.log(this.nombre +''+ this.apellido +''+ this.edad);

    }

};
usuario.imprimir();
usuario.imprimir;

console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento =  new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = "Adrian";
console.log(usuario);

var arreglo = [
    1,
    "Christian",
    true,
    undefined,
    null,
    new Date(),
    {
        nombre: "Christian"
    },
    [1, 2, 3, true]
];

console.log(arreglo);

function sumarNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos
}

console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.233));


var potenciaDeDosDeUnNumero = function
    noesnecesariopornerNombre(numero){
    return numero * numero;

};
//Funciones anonimas
var potenciaDeDosDeUnNumerosDos = function (numero) {
    return numero * numero

};

console.log(potenciaDeDosDeUnNumero(1,23,3,4,5,2));
console.log(potenciaDeDosDeUnNumerosDos(2));