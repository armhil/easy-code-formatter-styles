/**
 * ITheme.ts
 * 
 * an interface defining the styling.
 */

interface IStyle {
	/** Color */
	Color?: string,
	/** Background color */
	BackgroundColor?: string,
	/** Font weight */
	FontWeight?: string,
	/** Font style */
	FontStyle?: string
}

interface ICodeStyle {
	/** Keyword styles in code */
	Keyword: IStyle,
	/** Comment styles in code */
	Comment: IStyle,
	/** Plaintext styles in code */
	Plaintext: IStyle,
	/** Punctuation styles in code */
	Punctuation: IStyle,
	/** String styles in code */
	String: IStyle,
	/** Literal styles in code */
	Literal: IStyle,
	/** Type styles in code */
	Type: IStyle,
	/** Tag styles in code */
	Tag?: IStyle,
	/** Attribute name styles in code */
	AttributeName?: IStyle,
	/** Attribute value styles in code */
	AttributeValue?: IStyle,
	/** Decimal styles in code */
	Decimal?: IStyle,
	/** No code styles in code */
	NoCode?: IStyle
}

export interface ITheme {
	/** Display name */
	DisplayName: string,
	/** Code styles */
	CodeStyles : ICodeStyle,
	/** Background styles */
	BackgroundStyle: IStyle,
	/** Line number styles */
	LineNumberStyle: IStyle
}