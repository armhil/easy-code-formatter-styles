import { ITheme } from './ITheme';

export const Grayscale: ITheme = {
  DisplayName: 'Grayscale',
  CodeStyles: {
    Keyword: {
      Color: '333',
      FontWeight: 'bold',
      Background: 'url(data:image/png',
    },
    Comment: {
      Color: '777',
      FontStyle: 'italic',
    },
    Plaintext: {
      Color: '333',
    },
    Punctuation: {
      Color: '333',
    },
    String: {
      Color: '000',
      Background: 'url(data:image/png',
    },
    Literal: {
      Color: '999',
      Background: 'url(data:image/png',
      FontWeight: 'bold',
    },
    Type: {
      Color: '000',
      FontWeight: 'bold',
    },
    Tag: {
      Color: '333',
      FontWeight: 'bold',
    },
    Decimal: {
      Color: '777',
    },
    NoCode: {
      Color: 'fff',
      FontWeight: 'normal',
      Background: 'url(data:image/png',
    },
  },
  BackgroundStyle: {
    BackgroundColor: 'fff',
  },
  LineNumberStyle: {
    Color: '333',
    BackgroundColor: 'fff',
  },
};
