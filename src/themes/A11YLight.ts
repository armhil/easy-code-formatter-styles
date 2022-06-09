import { ITheme } from "./ITheme";

export const A11YLight : ITheme = {
	/** Display name */
	DisplayName: 'A11YLight',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: '7928a1'
		},
		Comment: {
			Color: '696969'
		},
		Plaintext: {
			Color: '545454'
		},
		Punctuation: {
			Color: '545454'
		},
		String: {
			Color: '008000'
		},
		Literal: {
			Color: 'aa5d00'
		},
		Type: {
			Color: '007faa'
		},
		Tag: {
			Color: '007faa'
		},
		AttributeName: {
			Color: 'aa5d00',
			FontWeight: 'bold'
		},
		AttributeValue: {
			Color: '008000'
		},
		Decimal: {
			Color: 'aa5d00'
		},
		NoCode: {
			Color: '000',
			BackgroundColor: 'none'
		}
	},
	// Background color
	BackgroundStyle: {
		BackgroundColor: 'fefefe'
	},
	// Line number background colors
	LineNumberStyle: {
		Color: '000'
	}
}