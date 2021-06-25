import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Import Redux store if required
import store from './store';

// Import layout components
import SiteNavigation from './components/SiteNavigation.jsx';

// Import pages
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Import assets
import logo from './assets/img/fpo-test.png';

export default () => {
  const pageHeader = 'Fusion Alliance Starter Kit';
  const navLinks = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/oops',
      text: '404 Page',
    },
  ];

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <SiteNavigation navigation={navLinks} />
          <img alt="React logo" src={logo} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
