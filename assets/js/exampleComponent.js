export default function loadExampleComponent({ option2 }) {
  const componentSelector = '.example-component';
  const exampleComponents = document.querySelectorAll(componentSelector);
  exampleComponents.forEach((component) => {
    const componentEl = component;
    componentEl.innerText = option2;
  });
}
