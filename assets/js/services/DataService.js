function DataService() {}
DataService.prototype.doStuff = function doStuff(...params) {
  // eslint-disable-next-line no-console
  console.log('Doing stuff', ...params);
};

// Common methods would be DataService.prototype.getData() for data retrieval
// or DataService.prototype.submit(data) for form submission

export default DataService;
