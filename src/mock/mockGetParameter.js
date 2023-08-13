export const mockResponse = {
  kind: 'youtube#searchListResponse',
  etag: 'rfK7uLd0RM7VTJDmb9udbkVGF3M',
  nextPageToken: 'CDIQAA',
  regionCode: 'BR',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 50,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'hbc3KFX_k8_IFlLlAby8RbTjsKw',
      id: {
        kind: 'youtube#video',
        videoId: 'xEJNKsvzw3w',
      },
      snippet: {
        publishedAt: '2022-02-18T21:05:46Z',
        channelId: 'UCc0cU92Tf7rvd2gr-CpVO4Q',
        title:
          'Fiat Pulse Audace 2023 - Novo motor 1.0 turbo mais forte, preço, consumo, problemas. Vale a pena?',
        description:
          'O grande lançamento de 2021 da Fiat foi com certeza o Pulse. Apresentado durante o BBB, onde os participantes do programa ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/xEJNKsvzw3w/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/xEJNKsvzw3w/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/xEJNKsvzw3w/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Opinião Sincera',
        liveBroadcastContent: 'none',
        publishTime: '2022-02-18T21:05:46Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'zZR69bKQO8lemcQsQ0mSt1-blaY',
      id: {
        kind: 'youtube#video',
        videoId: '67Zh_GE5QnU',
      },
      snippet: {
        publishedAt: '2023-06-30T21:32:57Z',
        channelId: 'UCM7Ysb5r_tVbxGabjTSQgkA',
        title:
          'FIAT PULSE JÁ ERA OU AINDA VALE A COMPRA? TESTE PULSE IMPETUS 2023. FASTBACK COM DESCONTO É MELHOR?',
        description:
          'Fiat Pulse Impetus 2023: ainda é boa compra? Ou Fastback com desconto do governo é a escolha certa? Fiat Pulse Impetus.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/67Zh_GE5QnU/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/67Zh_GE5QnU/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/67Zh_GE5QnU/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'De Carona com Leandro',
        liveBroadcastContent: 'none',
        publishTime: '2023-06-30T21:32:57Z',
      },
    },
  ],
};

export const mockResult = {
  descList: [
    'O grande lançamento de 2021 da Fiat foi com certeza o Pulse. Apresentado durante o BBB, onde os participantes do programa ...',
    'Fiat Pulse Impetus 2023: ainda é boa compra? Ou Fastback com desconto do governo é a escolha certa? Fiat Pulse Impetus.',
  ],
  idList: ['xEJNKsvzw3w', '67Zh_GE5QnU'],
  titleList: [
    'Fiat Pulse Audace 2023 - Novo motor 1.0 turbo mais forte, preço, consumo, problemas. Vale a pena?',
    'FIAT PULSE JÁ ERA OU AINDA VALE A COMPRA? TESTE PULSE IMPETUS 2023. FASTBACK COM DESCONTO É MELHOR?',
  ],
};
