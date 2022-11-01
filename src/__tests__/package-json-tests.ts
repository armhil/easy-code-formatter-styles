import * as shell from 'shelljs'; 

const publishedVersions = JSON.parse(shell.exec('npm show easy-code-formatter-styles time --json'));
const currentVersionShellOutput = shell.exec('npm pkg get version').stdout;
const currentVersion = currentVersionShellOutput.substring(1, currentVersionShellOutput.length-2);
const gitStatus = shell.exec('git status --porcelain');

describe('package.json tests', () => {
    it(`should make sure same version isn't committed`, () => {
        if (gitStatus.stdout.length > 0) {
            expect(Object.keys(publishedVersions)).not.toContain(currentVersion);
        }
    });
});