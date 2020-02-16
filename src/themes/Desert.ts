import { ITheme } from "./ITheme";

export const Desert : ITheme = {

	DisplayName: 'Desert',

	CodeStyles: {
		Keyword: 'color:#f0e68c',
		Comment: 'color:#87ceeb',
		Plaintext: 'color:#fff',
		Punctuation: 'color:#fff',
		String: 'color:#ffa0a0',
		Literal: 'color:#cd5c5c',
		Type: 'color:#98fb98',
		Tag: 'color:#f0e68c',
		AttributeName: 'color:#bdb76b;font-weight:bold',
		AttributeValue: 'color:#ffa0a0',
		Decimal: 'color:#98fb98',
		NoCode: 'color:#000;background-color:none;'
	},

	// Background color
	BackgroundStyle: 'background-color:#333;',

	// Line number background colors
	LineNumberStyle: 'color:white'
}