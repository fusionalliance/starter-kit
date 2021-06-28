import { configureStore } from '@reduxjs/toolkit';

import helloWorld from './helloWorld';

export default configureStore({
  reducer: {
    helloWorld,
  },
});
