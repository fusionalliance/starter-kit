function DataService() {}
DataService.prototype.doStuff = function doStuff(...params) {
  console.log('Doing stuff', ...params);
};

module.exports = DataService;
