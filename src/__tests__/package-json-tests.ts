import * as shell from 'shelljs'; 
import * as packageJson from '../../package.json';
const publishedVersions = JSON.parse(shell.exec('npm show easy-code-formatter-styles time --json'));
const currentVersion = packageJson.version;
const gitStatus = shell.exec('git status --porcelain');

describe('package.json tests', () => {
  it(`should make sure same version isn't committed`, () => {
      if (gitStatus.stdout.length > 0) {
          expect(Object.keys(publishedVersions)).not.toContain(currentVersion);
      }
  });
});