import { ITheme } from './ITheme';

// Matches the thonny theme defined here:
// https://github.com/thonny/thonny/blob/4fffa98e5c47e58ce72190c004f2ebc00879e4cd/thonny/plugins/base_syntax_themes.py#L5
export const ThonnyDefaultLight: ITheme = {
  DisplayName: 'Thonny Default Light',
  CodeStyles: {
    Keyword: {
      Color: '7f0055',
      FontWeight: 'bold',
    },
    Comment: {
      Color: 'a9a9a9',
    },
    Plaintext: {
      Color: '000000',
    },
    Punctuation: {
      Color: '000000',
    },
    String: {
      Color: '006400',
    },
    Literal: {
      Color: 'b04600',
    },
    Type: {
      Color: '7f0055',
    },
  },
  BackgroundStyle: {},
  LineNumberStyle: {
    Background: 'none',
  },
};
