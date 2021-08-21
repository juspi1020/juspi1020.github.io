import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {

    test('debe de retornar un heroe por id', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => heroe.id === id);

        expect(heroe).toEqual(heroeData);

    })
    test('debe de retornar undefine si el heroe no existe', () => {

        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('debe de retornar los heroes de DC', () => {

        const owner = 'DC';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter((h) => h.owner === owner);

        expect(heroe).toEqual(heroeData);

    })

    test('debe retortar un arreglo con los Heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroe.length).toBe(2);

    })


})
