import { ITheme } from "./ITheme";

export const A11YLight : ITheme = {

	DisplayName: 'A11YLight',

	CodeStyles: {
		Keyword: 'color:#7928a1',
		Comment: 'color:#696969',
		Plaintext: 'color:#545454',
		Punctuation: 'color:#545454',
		String: 'color:#008000',
		Literal: 'color:#aa5d00',
		Type: 'color:#007faa',
		Tag: 'color:#007faa',
		AttributeName: 'color:#aa5d00;font-weight:bold',
		AttributeValue: 'color:#008000',
		Decimal: 'color:#aa5d00',
		NoCode: 'color:#000;background-color:none;'
	},

	// Background color
	BackgroundStyle: 'background-color:#fefefe;',

	// Line number background colors
	LineNumberStyle: 'color:#000000'
}
