import { Themes, GetGenericStyle, GetLineNumberStyle } from '../..';
import { GetBackgroundStyle } from '..';

describe('Themes tests', () => {
  it('lower cased formatting | checks line number styles', () => {
    Object.keys(Themes).forEach((theme) => {
      Object.keys(Themes[theme].LineNumberStyle).forEach((styleName) => {
        const actual: string = Themes[theme].LineNumberStyle[styleName];
        const expected: string = actual.toLowerCase();
        expect(actual).toBe(expected);
      });
    });
  });

  it('lower cased formatting | checks top level background', () => {
    Object.keys(Themes).forEach((theme) => {
      Object.keys(Themes[theme].BackgroundStyle).forEach((styleName) => {
        const actual: string = Themes[theme].BackgroundStyle[styleName];
        const expected: string = actual.toLowerCase();
        expect(actual).toBe(expected);
      });
    });
  });

  it('lower cased formatting | checks generic styles', () => {
    Object.keys(Themes).forEach((theme) => {
      Object.keys(Themes[theme].CodeStyles).forEach((styleName) => {
        Object.keys(Themes[theme].CodeStyles[styleName]).forEach(
          (codeStyle) => {
            const actual: string =
              Themes[theme].CodeStyles[styleName][codeStyle];
            const expected: string = actual.toLowerCase();
            expect(actual).toBe(expected);
          }
        );
      });
    });
  });
});

describe('GetLineNumberStyle tests', () => {
  it.each([
    [undefined, ''],
    ['Default', 'background:none;'],
    ['Desert', 'color:#fff;background:none;'],
  ])(
    'produces the correct concatanation',
    (theme: string, expected: string) => {
      const actual: string = GetLineNumberStyle(theme);
      expect(actual).toBe(expected);
    }
  );
});

describe('GetBackgroundStyle tests', () => {
  it.each([
    [undefined, ''],
    ['Default', ''],
    ['Desert', 'background-color:#333;'],
    ['DefaultGray', 'background-color:#ececec;'],
  ])(
    'produces the correct concatanation',
    (theme: string, expected: string) => {
      const actual: string = GetBackgroundStyle(theme);
      expect(actual).toBe(expected);
    }
  );
});

describe('GetGenericStyle tests', () => {
  it.each([
    [undefined, undefined, ''],
    ['A11YDark', undefined, ''],
    ['A11YDark', 'AttributeName', 'color:#ffd700;'],
    ['A11YDark', 'NoCode', 'color:#ffa07a;'],
    ['AtelierCaveLight', 'AttributeName', 'color:#759731;font-weight:bold;'],
    ['Sunburst', 'Comment', 'color:#aeaeae;font-style:italic;'],
  ])(
    'produces the correct concatanation',
    (theme: string, styleName: string, expected: string) => {
      const actual: string = GetGenericStyle(theme, styleName);
      expect(actual).toBe(expected);
    }
  );
});
