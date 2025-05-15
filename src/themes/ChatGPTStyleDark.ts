import { ITheme } from "./ITheme";

/** Added White text due to dark background */
export const ChatGPTStyleDark: ITheme = {
    /** Display name */
    DisplayName: 'ChatGPT Style Dark',
    /** Code styles */
    CodeStyles: {
        Keyword: {
            Color: '66ccff', // Light blue for keywords
            FontWeight: 'bold'
        },
        Comment: {
            Color: '888888', // Medium gray for comments
            FontStyle: 'italic'
        },
        Plaintext: {
            Color: 'ffffff' // White for plain text
        },
        Punctuation: {
            Color: 'ffffff' // White for punctuation
        },
        String: {
            Color: '99cc99' // Soft green for strings
        },
        Literal: {
            Color: 'ff99cc' // Light pink for numbers, true, false
        },
        Type: {
            Color: 'cc99ff' // Light purple for types
        },
        Tag: {
            Color: 'ff6666' // Light red for tags like <div>
        },
        AttributeName: {
            Color: '99ff99', // Bright green for attribute names
            FontWeight: 'bold'
        },
        AttributeValue: {
            Color: '66ccff' // Light blue for attribute values
        },
        Decimal: {
            Color: 'ff99cc' // Same as Literal
        },
        NoCode: {
            Color: 'ffffff',
            BackgroundColor: 'none'
        }
    },
    // Background color
    BackgroundStyle: {
        BackgroundColor: '2D2E41' // Dark background (near black)
    },
    // Line number background colors
    LineNumberStyle: {
        Color: '777777',
        Background: 'none'
    }
};