import component from './exampleComponent';

describe('exampleComponent', () => {
  const option1 = 'something';
  const option2 = 'something else';

  const mockDataService = {
    doStuff: jest.fn(),
  };

  window.app = {
    dataService: mockDataService,
    option1,
    option2,
  };

  // Set doc body
  document.documentElement.innerHTML = `<html><body>
    <div class="example-component"></div>
  </body></html>`;

  // Load component
  component();

  const exampleComponents = document.querySelectorAll('.example-component');

  test('adds option2 as content', () => {
    expect(exampleComponents.length).toBe(1);
    expect(exampleComponents[0].innerText).toBe(option2);
  });

  test('calls dataService.doStuff on click', () => {
    exampleComponents[0].click();

    expect(mockDataService.doStuff).toHaveBeenCalledTimes(1);
    expect(mockDataService.doStuff).toHaveBeenCalledWith(option1);
  });
});
