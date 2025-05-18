import { ITheme, ICodeStyle, IStyle } from './ITheme';
import { Default } from './Default';
import { DefaultGray } from './DefaultGray';
import { Desert } from './Desert';
import { Sunburst } from './Sunburst';
import { A11YDark } from './A11YDark';
import { A11YLight } from './A11YLight';
import { AtelierCaveLight } from './AtelierCaveLight';
import { AtelierCaveDark } from './AtelierCaveDark';
import { BlueHintGray } from './BlueHintGray';
import { csharpDark } from 'csharpDark';

type ThemeDictionary = { [key: string]: ITheme };

function MergeStyleProperties(object: IStyle) {
  if (!object || !Object.keys(object)) {
    return "";
  }

  const styleNameMap: { [key: string]: string } = {
    'Color': 'color:#',
    'Background': 'background:',
    'BackgroundColor': 'background-color:',
    'FontWeight': 'font-weight:',
    'FontStyle': 'font-style:'
  };

  return Object.keys(object).reduce((p, c) => {
    if ((c === 'BackgroundColor' || c === 'Background') && object[c] !== 'none') {
      return `${p}${styleNameMap[c]}#${object[c]};`;
    }
    return `${p}${styleNameMap[c]}${object[c]};`;
  }, "");
}

export const Themes: ThemeDictionary = {
  Default,
  DefaultGray,
  Desert,
  Sunburst,
  A11YDark,
  A11YLight,
  AtelierCaveLight,
  AtelierCaveDark,
  BlueHintGray,
  csharpDark
}

export function GetLineNumberStyle(theme: string) {
  if (!Themes[theme]) {
    return "";
  }
  return MergeStyleProperties(Themes[theme].LineNumberStyle);
}

export function GetBackgroundStyle(theme: string) {
  if (!Themes[theme]) {
    return "";
  }
  return MergeStyleProperties(Themes[theme].BackgroundStyle);
}

/**
 * Returns a CSS style string for code references
 * @param theme Defined theme we're getting the style for
 * @param styleName Style name of the code snippet (ex: Keyword vs Punctuation)
 * @returns string
 */
export function GetGenericStyle(theme: string, styleName: string): string {
  if (!Themes[theme]) {
    return "";
  }
  return MergeStyleProperties(Themes[theme].CodeStyles[styleName])
}