import { Themes, GetGenericStyle, GetLineNumberStyle } from '../..';

describe('Themes tests', () => {
    it('lower cased formatting | checks top level background', () => {
        Object.keys(Themes).forEach((theme) => {
            Object.keys(Themes[theme].BackgroundStyle).forEach((styleName) => {
                const actual: string = Themes[theme].BackgroundStyle[styleName];
                const expected: string = actual.toLowerCase();
                expect(actual).toBe(expected);
            });
        });
    });
    it('lower cased formatting | checks generic styles', () => {
        Object.keys(Themes).forEach((theme) => {
            Object.keys(Themes[theme].CodeStyles).forEach((styleName) => {
                Object.keys(Themes[theme].CodeStyles[styleName]).forEach((codeStyle) => {
                    const actual: string = Themes[theme].CodeStyles[styleName][codeStyle];
                    const expected: string = actual.toLowerCase();
                    expect(actual).toBe(expected);
                });
            });
        });
    });
});

describe('GetGenericStyle tests', () => {
    it('produces the correct concatanation', () => {

    });
});

describe('GetLineNumberStyle', () => {
    it('produces the correct concatanation', () => {

    })
})