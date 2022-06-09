import { ITheme } from "./ITheme";

export const Desert : ITheme = {
	/** Display name */
	DisplayName: 'Desert',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: 'f0e68c' 
		},
		Comment: {
			Color: '87ceeb'
		},
		Plaintext: {
			Color: 'fff'
		},
		Punctuation: {
			Color: 'fff'
		},
		String: {
			Color: 'ffa0a0'
		},
		Literal: {
			Color: 'cd5c5c'
		},
		Type: {
			Color: '98fb98'
		},
		Tag: {
			Color: 'f0e68c'
		},
		AttributeName: {
			Color: 'bdb76b',
			FontWeight: 'bold'
		},
		AttributeValue: {
			Color: 'ffa0a0'
		},
		Decimal: {
			Color: '98fb98'
		},
		NoCode: {
			Color: '000',
			BackgroundColor: 'none'
		}
	},
	// Background color
	BackgroundStyle: {
		BackgroundColor: '333'
	},
	// Line number background colors
	LineNumberStyle: {
		Color: 'fff'
	}
}