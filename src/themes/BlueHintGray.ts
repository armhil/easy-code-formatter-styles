import { ITheme } from "./ITheme";

export const BlueHintGray: ITheme = {
  /** Display name */
  DisplayName: 'Blue Hint Gray',
  /** Code styles */
  CodeStyles: {
    Keyword: {
      Color: '0000ff'
    },
    Comment: {
      Color: '008000'
    },
    Plaintext: {
      Color: '000'
    },
    Punctuation: {
      Color: '000'
    },
    String: {
      Color: 'a31515'
    },
    Literal: {
      Color: '066'
    },
    Type: {
      Color: '2b91af'
    },
    Tag: {
      Color: '2b91af'
    },
  },
  // Background color
  BackgroundStyle: {
    BackgroundColor: 'eaeaea'
  },
  // Line number background colors
  LineNumberStyle: {
    Background: 'none'
  }
}