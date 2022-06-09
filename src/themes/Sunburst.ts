import { ITheme } from "./ITheme";

export const Sunburst : ITheme = {
	/** Display name */
	DisplayName: 'Sunburst',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: 'e28964'
		},
		Comment: {
			Color: 'aeaeae',
			FontStyle: 'italic'
		},
		Plaintext: {
			Color: 'fff'
		},
		Punctuation: {
			Color: 'fff'
		},
		String: {
			Color: '65b042'
		},
		Literal: {
			Color: 'cd5c5c'
		},
		Type: {
			Color: '89bdff'
		},
		Tag: {
			Color: '89bdff'
		},
		AttributeName: {
			Color: 'bdb76b'
		},
		AttributeValue: {
			Color: '65b042'
		},
		Decimal: {
			Color: '3387cc'
		},
		NoCode: {
			Color: '000',
			BackgroundColor: 'none'
		}
	},
	// Background color
	BackgroundStyle: {
		BackgroundColor: '000'
	},
	// Line number background colors
	LineNumberStyle: {
		Color: 'fff',
		Background: 'none'
	}
}