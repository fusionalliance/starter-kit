# Bootstrap

Bootstrap is installed as a project dev dependency. Currently, only styles for [Reboot](https://getbootstrap.com/docs/4.3/content/reboot/) and the [Grid stystem](https://getbootstrap.com/docs/4.3/layout/grid/) are imported in `_bootstrap.scss` as a base.
```SCSS
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors
  * Copyright 2011-2019 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

@import "~bootstrap/scss/bootstrap-reboot.scss";
@import "~bootstrap/scss/bootstrap-grid.scss";
```


## Importing all Bootstrap styles
If all components are required, replace the contents of `_bootstrap.scss` with the following.
```SCSS
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors
  * Copyright 2011-2019 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

@import "~bootstrap/scss/bootstrap.scss";
```


## Customizing Bootstrap import
If some, but not all components are required, replace the contents of `_bootstrap.scss` with the following, removing unneeded components.

```SCSS
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors
  * Copyright 2011-2019 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

@import "functions";
@import "variables";
@import "mixins";
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "code";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "input-group";
@import "custom-forms";
@import "nav";
@import "navbar";
@import "card";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "jumbotron";
@import "alert";
@import "progress";
@import "media";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "utilities";
@import "print";
```