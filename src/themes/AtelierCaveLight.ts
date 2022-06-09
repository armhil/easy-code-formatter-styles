import { ITheme } from "./ITheme";

export const AtelierCaveLight : ITheme = {
	/** Display name */
	DisplayName: 'Atelier Cave Light',
	/** Code styles */
	CodeStyles: {
		Keyword: {
			Color: '955ae7'
		},
		Comment: {
			Color: '7e7887'
		},
		Plaintext: {
			Color: 'aa573c'
		},
		Punctuation: {
			Color: '8b8792'
		},
		String: {
			Color: '2a9292'
		},
		Literal: {
			Color: 'c07156'
		},
		Type: {
			Color: '576ddb'
		},
		Tag: {
			Color: 'be4678'
		},
		AttributeName: {
			Color: '759731',
			FontWeight: 'bold' 
		},
		AttributeValue: {
			Color: 'be4678'
		},
		Decimal: {
			Color: 'aa573c'
		},
		NoCode: {
			Color: '576ddb',
			BackgroundColor: 'none'
		}
	},
	// Background color
	BackgroundStyle: {
		BackgroundColor: 'efecf4'
	},
	// Line number background colors
	LineNumberStyle: {
		Color: 'AEB0B3',
		Background: 'none'
	}
}