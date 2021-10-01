const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //   fail('Teste vazio!');

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função. - ok
    // Teste se o retorno da função é um array. - ok
    // Teste se o array retornado pela função contém dois itens dentro. - ok
    // Teste se os dois itens dentro do array retornado pela função são objetos. - ok
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si. - ok
    // Teste se os dois productIds terminam com 123. -ok
  // });

  test('Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toEqual('function')
  });

  test('Teste se o retorno da função é um array', () => {
    const toString = Object.prototype.toString;
    const retorno = toString.call((productDetails('fruta','agua')))
    expect(retorno).toEqual('[object Array]');

    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
  });

  test('Teste se o array retornado pela função contém dois itens dentro', () => {
    const retorno = toString.call((productDetails('fruta','agua')))
    expect(productDetails('fruta','agua').length).toEqual(2);
  });

  test('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('fruta','agua')[0] && typeof productDetails('fruta','agua')[1]).toBe('object')
  });

  test('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('agua','frutas')[0].name).not.toEqual(productDetails('agua','frutas')[1].name);
  });
  
  test('Teste se os dois productIds terminam com 123', () => {
    expect(productDetails('agua','frutas')[0].details.productId.includes(123) && productDetails('agua','frutas')[1].details.productId.includes(123)).toBeTruthy()
  })

});
