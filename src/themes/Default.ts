import { ITheme } from "./ITheme";

export const Default : ITheme = {
	/** Display name */
	DisplayName: 'Default',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: '008'
		},
		Comment: {
			Color: '800'
		},
		Plaintext: {
			Color: '000'
		},
		Punctuation: {
			Color: '660'
		},
		String: {
			Color: '080'
		},
		Literal: {
			Color: '066'
		},
		Type: {
			Color: '606'
		}
	},
	// Background color
	BackgroundStyle: {},
	// Line number background colors
	LineNumberStyle: {}
};