//Funciones en js

const saludar = function (nombre) {
    return ` Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return ` Hola, ${nombre}`;
}

const saludar3 = (nombre) => ` Hola, ${nombre}`;
const saludar4 = () => ` Hola Mundo`;

console.log(saludar('Mario'));
console.log(saludar2('Astoncio'));
console.log(saludar3('Ferney'));


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Animal123',
    }
}

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Gabriel');
console.log(usuarioActivo);