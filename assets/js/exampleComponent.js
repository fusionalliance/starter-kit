export default function loadExampleComponent({ dataService, option1, option2 }) {
  const componentSelector = '.example-component';
  const exampleComponents = document.querySelectorAll(componentSelector);
  exampleComponents.forEach((component) => {
    const componentEl = component;
    componentEl.innerText = option2;

    componentEl.addEventListener('click', () => {
      dataService.doStuff(option1);
    });
  });
}
