
const nombre   = 'Sebastian';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Jose') {
    return 'Hola ' + nombre + "!";
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );