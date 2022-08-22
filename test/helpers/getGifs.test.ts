import getGifs from '../../src/helpers/getGifs';
import { Gifs } from '../../src/types'

describe('Test of getGifs funtion', () => { 
    test('should return a list of gifs', async () => {
        const gifs = await getGifs("avatar");
        // console.log("gifs",gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });


    });
 });