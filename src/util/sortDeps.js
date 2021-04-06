module.exports = async function sortDeps() {
  this.log('Cleaning up package.json');
  const destinationPkgJson = require(this.destinationPath('package.json')); // eslint-disable-line global-require, import/no-dynamic-require
  delete destinationPkgJson.eslintConfig;

  const devDeps = {};
  const deps = {};
  Object.keys(destinationPkgJson.devDependencies).sort().forEach((key) => {
    devDeps[key] = destinationPkgJson.devDependencies[key];
  });

  Object.keys(destinationPkgJson.dependencies).sort().forEach((key) => {
    deps[key] = destinationPkgJson.dependencies[key];
  });
  destinationPkgJson.devDependencies = devDeps;
  destinationPkgJson.dependencies = deps;

  await this.writeJson(this.destinationPath('package.json'), destinationPkgJson);
};
