import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas en funciones 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toStrictEqual(userTest)
    })

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Rojelio';

        const user = getUsuarioActivo(nombre);

        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        expect(user).toEqual(userActivoTest)
    })



})
