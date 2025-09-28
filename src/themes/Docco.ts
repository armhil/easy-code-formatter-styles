import { ITheme } from './ITheme';

export const Docco: ITheme = {
  DisplayName: 'Docco',
  CodeStyles: {
    Keyword: {
      Color: '219161',
    },
    Comment: {
      Color: '408080',
      FontStyle: 'italic',
    },
    Plaintext: {
      Color: '000',
    },
    Punctuation: {
      Color: '000',
    },
    String: {
      Color: '990073',
      BackgroundColor: 'dfd',
    },
    Literal: {
      Color: '999',
      FontWeight: 'bold',
    },
    Type: {
      Color: '0086b3',
      FontWeight: 'bold',
    },
    Tag: {
      Color: '000080',
      FontWeight: 'normal',
    },
    AttributeName: {
      Color: '000080',
      FontWeight: 'normal',
    },
    Decimal: {
      Color: '40a070',
    },
    NoCode: {
      Color: '954121',
      BackgroundColor: 'fdd',
    }
  },
  BackgroundStyle: {
    BackgroundColor: 'f8f8ff',
  },
  LineNumberStyle: {
    Color: '000',
    BackgroundColor: 'f8f8ff',
  },
};
