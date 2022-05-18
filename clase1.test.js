import { push } from './clase1.js';
describe('Given Push function', () => {
    test('It should throw an error if not array', () => {
        // Arange
        const param1 = '';
        //act &assert
        // esto solo pasa para comprobar errores
        expect(() => {
            push(param1, param1);
        }).toThrow;
    });
});
