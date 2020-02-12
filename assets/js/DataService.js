function DataService() {}
DataService.prototype.doStuff = function doStuff(...params) {
  // eslint-disable-next-line no-console
  console.log('Doing stuff', ...params);
};

module.exports = DataService;
