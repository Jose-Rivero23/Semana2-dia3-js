import { push } from './clase1.js';
describe('Given Push function', () => {
    test('It should throw an error if not array', () => {
        // Arange
        const arr = '';
        const item = '';
        //act &assert
        // esto solo pasa para comprobar errores
        expect(() => {
            push(arr, item);
        }).toThrow('EL imput debe ser tipo array');
    });
});
