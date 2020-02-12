export default function loadHandleClick({ dataService }) {
  return function handleClick(value) {
    dataService.doStuff(value);
  };
}
