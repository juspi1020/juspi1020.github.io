import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en promesas', () => {

    test('debe retornar un heroe async', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });
    test('debe generar un error si el heroe por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(heroe => {
                expect(heroe).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
})
