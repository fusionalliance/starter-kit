import handleClick from './handleClick.js';

describe('handleClick', () => {
  test('should call dataService.doStuff', () => {
    const testValue = 'something';

    const mockDataService = {
      doStuff: jest.fn(),
    };

    window.app = {
      dataService: mockDataService,
    };

    handleClick(testValue);
    expect(mockDataService.doStuff).toHaveBeenCalledTimes(1);
    expect(mockDataService.doStuff).toHaveBeenCalledWith(testValue);
  });
});
