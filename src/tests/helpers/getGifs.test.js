import { getGifs } from "../../helpers/getGifs"



describe('Pruebas con fecth getgifs', () => {

    test('deve de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10)
    })
    
    test('deve ser 0 si se envia un string vacio', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
    })


})
