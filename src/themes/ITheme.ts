/**
 * ITheme.ts
 * 
 * an interface defining the styling.
 */
interface ICodeStyle {

	// Keyword styles in code
	Keyword: string,

	// Comment styles in code
	Comment: string,

	// Plaintext styles in code
	Plaintext: string,

	// Punctuation styles in code
	Punctuation: string,

	// String styles in code
	String: string,
		
	// Literal styles in code
	Literal: string,

	// Type styles in code
	Type: string,

	// Tag styles in code
	Tag?: string,

	// Attribute name styles in code
	AttributeName?: string,

	// Attribute value styles in code
	AttributeValue?: string,

	// Decimal styles in code
	Decimal?: string,

	// No code styles in code
	NoCode?: string
}

export interface ITheme {
	// Code styles
	CodeStyles : ICodeStyle,

	// Background styles
	BackgroundStyle: string,

	// Line number styles
	LineNumberStyle: string
}