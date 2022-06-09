import { ITheme } from "./ITheme";

export const A11YDark : ITheme = {
	/** Display name */
	DisplayName: 'A11YDark',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: 'dcc6e0',
		},
		Comment: {
			Color: 'd4d0ab'
		},
		Plaintext: {
			Color: 'fff',
		},
		Punctuation: {
			Color: 'fff'
		},
		String: {
			Color: 'abe338'
		},
		Literal: {
			Color: 'f5aB35'
		},
		Type: {
			Color: '00e0e0'
		},
		Tag: {
			Color: '00e0e0'
		},
		AttributeName: {
			Color: 'ffd700',
			FontWeight: 'bold'
		},
		AttributeValue: {
			Color: 'abe338'
		},
		Decimal: {
			Color: 'f5ab35',
		},
		NoCode: {
			Color: '000',
			BackgroundColor: 'none'
		}
	},
	// Background color
	BackgroundStyle: {
		BackgroundColor: '2b2b2b'
	},
	// Line number background colors
	LineNumberStyle: {
		Color: 'fff',
		Background: 'none'
	}
}