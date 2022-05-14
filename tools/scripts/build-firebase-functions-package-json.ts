import * as path from 'path';
import * as depcheck from 'depcheck';
import * as fs from 'fs';

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (!args?.length || !args[0]) {
    throw new Error('Application name must be provided.');
  }

  const APPLICATION_NAME = args[0];
  console.log(`Application name: ${APPLICATION_NAME}`);

  /*****************************************************************************
   * package.json
   * - Filter unused dependencies.
   * - Write custom package.json to the dist directory.
   ****************************************************************************/
  const ROOT_PATH = path.resolve(__dirname + '/../..');
  const DIST_PROJECT_PATH = `${ROOT_PATH}/dist/apps/${APPLICATION_NAME}`;
  const PACKAGE_JSON_TEMPLATE = {
    engines: { node: '16' },
    main: 'main.js',
  };

  const packageJson = require('../../package.json');
  console.log('Creating cloud functions package.json file...');

  // Get unused dependencies
  const { dependencies: unusedDependencies } = await depcheck(
    DIST_PROJECT_PATH,
    {
      package: {
        dependencies: packageJson.dependencies,
      },
    }
  );

  // Filter dependencies
  const requiredDependencies = Object.entries(
    packageJson.dependencies as {[key: string]: string}
  )?.filter(([key, value]) => !unusedDependencies?.includes(key))
    ?.reduce<{[key: string]: string}>((
      previousValue,
      [key, value]
    ) => {
      previousValue[key] = value;
      return previousValue;
    }, {});

  console.log(`Unused dependencies count: ${unusedDependencies?.length}`);
  console.log(`Required dependencies count: ${Object.values(requiredDependencies)?.length}`);

  // Write custom package.json to the dist directory
  await fs.promises.mkdir(path.dirname(DIST_PROJECT_PATH), { recursive: true });
  await fs.promises.writeFile(
    `${DIST_PROJECT_PATH}/package.json`,
    JSON.stringify({
      ...PACKAGE_JSON_TEMPLATE,
      dependencies: requiredDependencies,
    }, undefined, 2)
  );

  console.log(`Written successfully: ${DIST_PROJECT_PATH}/package.json`);
}

main().then(() => {
  // Nothing to do
}).catch(error => {
  console.error(error);
});
