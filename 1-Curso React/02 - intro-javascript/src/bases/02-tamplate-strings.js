const nombre = 'Sebastian';
const apellido ='Parra';

const fullName = `${nombre} ${apellido}`;

console.log(fullName);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);