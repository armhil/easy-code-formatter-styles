# easy-code-formatter-styles

Since the original release of [Easy Code Formatter](https://appsource.microsoft.com/en/product/office/WA104382008?tab=Overview), I've received a lot of requests around extending the support for the styles and this is an attempt to do that.

## How to add a new style

Add a new `.ts` file with your style name which implements the `ITheme` interface - export it the same way the rest of the styles are being exported.

Once merged to master, it'll be built and published to npm and deployed afterwards with easy code formatter.

## About Easy Code Formatter

Easy code formatter is a Microsoft Word add-in that allows people to style their text in word as code. You'll have to be at least on Word 2013 to use this addin.

You can download it from [AppSource].(https://appsource.microsoft.com/en/product/office/WA104382008?tab=Overview)

An example code input             |  Formatted code with `Default` style.
:-------------------------:|:-------------------------:
![](https://github.com/armhil/easy-code-formatter-styles/blob/master/img/screenshot-1.png)  |  ![](https://github.com/armhil/easy-code-formatter-styles/blob/master/img/screenshot-2.png)
