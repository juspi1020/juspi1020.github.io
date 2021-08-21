const persona = {
    nombre: 'Tony',
    apellido: 'Velasco',
    edad: 45,
    direccion: {
        ciudad: 'Cali',
        zip: '123123',
        lat: 123.123123,
        lng: 123.13124,
    }
};

// console.table(persona);
console.log(persona);

const persona2 = { ...persona };

persona2.nombre = 'Pablo';

console.log(persona2);