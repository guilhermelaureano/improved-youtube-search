import { expect } from '@jest/globals';
import { mockResponse } from '../mock/mockGetParameter';
import { getParameter } from './index';

describe('getParameter', () => {
  it('should get the parameters and return an array for each of the items ', () => {
    const { items } = mockResponse;
    const data = getParameter(items);

    expect(data).toStrictEqual({
      desc: [
        'O grande lançamento de 2021 da Fiat foi com certeza o Pulse. Apresentado durante o BBB, onde os participantes do programa ...',
        'Fiat Pulse Impetus 2023: ainda é boa compra? Ou Fastback com desconto do governo é a escolha certa? Fiat Pulse Impetus.',
      ],
      id: ['xEJNKsvzw3w', '67Zh_GE5QnU'],
      title: [
        'Fiat Pulse Audace 2023 - Novo motor 1.0 turbo mais forte, preço, consumo, problemas. Vale a pena?',
        'FIAT PULSE JÁ ERA OU AINDA VALE A COMPRA? TESTE PULSE IMPETUS 2023. FASTBACK COM DESCONTO É MELHOR?',
      ],
    });
  });
});
