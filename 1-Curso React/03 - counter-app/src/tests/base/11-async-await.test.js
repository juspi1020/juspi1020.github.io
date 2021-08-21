import { getImagen } from "../../base/11-async-await"


describe('Pruebas async y await', () => {

    test('deberia regresar la url', async () => {

        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);

    })
})
