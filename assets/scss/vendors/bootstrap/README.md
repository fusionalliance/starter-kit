# Bootstrap

Bootstrap is installed as a project dev dependency. Currently, only styles for
[Reboot](https://getbootstrap.com/docs/4.3/content/reboot/), the
[Grid system](https://getbootstrap.com/docs/4.3/layout/grid/),
[Utliities](https://getbootstrap.com/docs/4.3/utilities/borders/), print styles,
and their supporting files are imported in `_bootstrap.scss` as a base.

```scss
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors
  * Copyright 2011-2019 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/print";
```

## Importing all Bootstrap styles

If all components are required, replace the contents of `_bootstrap.scss` with
the following.

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

If some, but not all components are required, replace the contents of
`_bootstrap.scss` with the following, removing unneeded imports.

```SCSS
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors
  * Copyright 2011-2019 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/code";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/input-group";
@import "~bootstrap/scss/custom-forms";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/breadcrumb";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/jumbotron";
@import "~bootstrap/scss/alert";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/media";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/toasts";
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/tooltip";
@import "~bootstrap/scss/popover";
@import "~bootstrap/scss/carousel";
@import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/print";
```
