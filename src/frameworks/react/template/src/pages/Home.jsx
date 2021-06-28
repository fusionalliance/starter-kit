import HelloWorld from '../components/HelloWorld.jsx';

export default () => {
  const pageMsg = 'Home page - Hello world';
  return (
    <HelloWorld msg={pageMsg} />
  );
};
