//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const UseContext = ({ nombre, edad, rango = 'Capitan' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123.123,
            lng: 343.41,
        }
    }

}


const { nombreClave, anios, latlng: { lat, lng } } = UseContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);