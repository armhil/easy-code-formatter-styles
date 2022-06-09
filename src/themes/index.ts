import { ITheme, ICodeStyle, IStyle } from './ITheme';
import { Default } from './Default';
import { DefaultGray } from './DefaultGray';
import { Desert } from './Desert';
import { Sunburst } from './Sunburst';
import { A11YDark } from './A11YDark';
import { A11YLight } from './A11YLight';
import { AtelierCaveLight } from './AtelierCaveLight';
import { AtelierCaveDark } from './AtelierCaveDark';
import { BlueHintGray } from  "./BlueHintGray";

type ThemeDictionary = { [key: string]: ITheme };

function MergeStyleProperties(object: IStyle) {
	const styleNameMap: { [key: string]: string } = {
		'Color': 'color',
		'BackgroundColor': 'background-color',
		'FontWeight': 'font-weight',
		'FontStyle': 'font-style'
	};

	return Object.keys(object).reduce((p, c) => `${p};${styleNameMap[c]}:${object[c]}`);
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
	BlueHintGray
}

export function GetLineNumberStyle(theme: string) {
	return MergeStyleProperties(Themes[theme].LineNumberStyle);
}

export function GetGenericStyle(theme: string, styleName: string) {
	return MergeStyleProperties(Themes[theme].CodeStyles[styleName])
}