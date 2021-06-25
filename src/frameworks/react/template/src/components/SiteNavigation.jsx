import React from 'react';
import {
  Link,
} from 'react-router-dom';

// If a component wanted to use custom styles instead of rely on page styles, import then here
// import 'SiteNavigation.scss';

export default ({ navigation }) => (
  <header>
    {navigation.map((navItem, idx) => (
      <Link
        key={idx}
        to={navItem.to}
      >{navItem.text}</Link>
    ))}
  </header>
);
