import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getExampleText, setExampleText } from '../store/helloWorld';

export default ({ msg }) => {
  // This is a simple example use hooks
  const [isToggled, setIsToggled] = useState(false);

  // This is a simple example using Redux hooks
  const exampleText = useSelector(getExampleText);
  const dispatch = useDispatch();
  // You can also pass a function here, but it's best to let the store define its data as needed
  // const exampleText = useSelector((state) => state.helloWorld.exampleText);

  return (
    <div className="hello">
      <h1>{msg}</h1>
      <ul>
        <li>Button + simple state hook <button onClick={() => setIsToggled(!isToggled)}>Toggle value</button>: ToggledValue={isToggled ? 'true' : 'false'}</li>
        <li>Text + Redux <input type="text" onChange={(e) => dispatch(setExampleText(e.target.value))}></input>: bound value={exampleText}</li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://github.com/facebook/react/" target="_blank" rel="noopener">React GitHub</a></li>
        <li><a href="https://reactjs.org/community/support.html#popular-discussion-forums" target="_blank" rel="noopener">Forums</a></li>
        <li><a href="https://dev.to/t/react" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/reactjs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://www.facebook.com/react" target="_blank" rel="noopener">Facebook</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://reactrouter.com/web" target="_blank" rel="noopener">React Router</a></li>
        <li><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener">React Hooks</a></li>
        <li><a href="https://react-redux.js.org/" target="_blank" rel="noopener">Redux</a></li>
      </ul>
    </div>
  );
};
