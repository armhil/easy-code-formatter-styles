import { ITheme } from "./ITheme";

export const DefaultGray : ITheme = {
	/** Display name */
	DisplayName: 'Default (with Gray background)',
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
	BackgroundStyle: {
		BackgroundColor: 'ececec'
	},
	// Line number background colors
	LineNumberStyle: {
		Background: 'none'
	}
};