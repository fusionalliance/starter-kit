import load from './handleClick.js';

test('handleClick should call dataService.doStuff', () => {
  const testValue = 'something';

  const mockDataService = {
    doStuff: jest.fn(),
  };

  const opts = {
    dataService: mockDataService,
  };

  const handleClick = load(opts);
  handleClick(testValue);
  expect(mockDataService.doStuff).toHaveBeenCalledTimes(1);
  expect(mockDataService.doStuff).toHaveBeenCalledWith(testValue);
});
