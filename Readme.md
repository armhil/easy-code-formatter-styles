# Hi

# easy-code-formatter-styles

[![Main CI | Build, Test and NPM Publish](https://github.com/armhil/easy-code-formatter-styles/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/armhil/easy-code-formatter-styles/actions/workflows/main.yml)
[![Code coverage](https://codecov.io/gh/armhil/armhil/branch/main/graph/badge.svg?token=DG8MNMD2ZD)](https://codecov.io/gh/armhil/armhil)

Since the original release of [Easy Code Formatter](https://appsource.microsoft.com/en/product/office/WA104382008?tab=Overview), I've received a lot of requests around extending the support for the styles and this is an attempt to do that.

When you send a PR, the pipeline will automatically bump the package.json version if it's not bumped.

### How to add a new style

Add a new `.ts` file with your style name which implements the `ITheme` interface - export it the same way the rest of the styles are being exported.

Once merged to master, it'll be built and published to npm and deployed afterwards with easy code formatter.

### About Easy Code Formatter

Easy code formatter is a Microsoft Word add-in that allows people to style their text in word as code. You'll have to be at least on Word 2013 to use this addin.

You can download it from [AppSource](https://appsource.microsoft.com/en/product/office/WA104382008?tab=Overview).

Formatted code with `Default` style. | with `Desert style`
:-------------------------:|:-------------------------:
![](https://github.com/armhil/easy-code-formatter-styles/blob/main/img/default.png)  |  ![](https://github.com/armhil/easy-code-formatter-styles/blob/main/img/desert.png)


Formatted code with `A11YDark` style. | with `A11YLight style`
:-------------------------:|:-------------------------:
![](https://github.com/armhil/easy-code-formatter-styles/blob/main/img/a11ydark.png)  |  ![](https://github.com/armhil/easy-code-formatter-styles/blob/main/img/a11ylight.png)
