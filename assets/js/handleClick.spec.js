const handleClick = require('./handleClick');

test('handleClick should call dataService.doStuff', () => {
  const testValue = 'something';

  const mockDataService = {
    doStuff: jest.fn(),
  };

  handleClick(mockDataService, testValue);
  expect(mockDataService.doStuff).toHaveBeenCalledTimes(1);
  expect(mockDataService.doStuff).toHaveBeenCalledWith(testValue);
});
