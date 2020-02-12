export default function exampleComponent() {
  const componentSelector = '.example-component';
  const exampleComponents = document.querySelectorAll(componentSelector);
  exampleComponents.forEach((component) => {
    const componentEl = component;
    componentEl.innerText = app.option2;

    componentEl.addEventListener('click', () => {
      app.dataService.doStuff(app.option1);
    });
  });
}
