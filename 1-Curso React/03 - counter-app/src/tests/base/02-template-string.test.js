import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas del archivo 02-template-string.js', () => {

    test('prueba en el metodo getSaludo', () => {
        const nombre = 'Sebastian';

        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' +  nombre + "!");
    })

//getSaludo debe retornar Hola Jose! si no hay argumento e el nombre
    test('debe retortar Hola Jose! si no hay argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Jose!');
    })
})