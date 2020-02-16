# easy-code-formatter-styles

This is a work-in-progress.

Easy code formatter is a Microsoft Word add-in that allows people to style their text in word as code.

Since the original release, I've received a lot of requests around extending the support for the styles and this is an attempt to do that.

The integration of this repo into the main code formatter is not done yet and will take some time, but the final idea is, once you decide to have a custom style (or port an existing one from some other tool), you can just leverage this repository.

## How to add a new style

Add a new `.ts` file with your style name which implements the `ITheme` interface - export it the same way the rest of the styles are being exported.

Once merged to master, it'll be built and published to npm and deployed afterwards with easy code formatter.