const FizzBuzz = require("../src/scripts/FizzBuzz");

describe('FizzBuzz', () => {
  const resultado = FizzBuzz();

  test('debería devolver "buzz" para el número 5', () => {
    expect(resultado.split('\n')[4]).toBe("buzz");
    })
  test('debería devolver "fizz" para el número 3', () => {
    expect(resultado.split('\n')[2]).toBe("fizz");
    })
  test('debería devolver "fizzbuzz" para el número 15', () => {
    expect(resultado.split('\n')[14]).toBe("fizzbuzz");
    })
  test('debería recorrer los 100 números', () => {
        const numeros = resultado.split('\n').map(Number);
        expect(numeros.length).toBe(101);
    });
});