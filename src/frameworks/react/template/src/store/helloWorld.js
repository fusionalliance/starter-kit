import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exampleText: '',
};

const helloWorldSlice = createSlice({
  // Names should represent data entities, not features. In this case there is no good name.
  name: 'helloWorld',
  initialState,
  reducers: {
    setExampleText: (state, action) => ({
      ...state,
      exampleText: action.payload,
    }),
  },
});

// ActionCreators
export const { setExampleText } = helloWorldSlice.actions;

// Selectors
export const getExampleText = (state) => state.helloWorld.exampleText;

export default helloWorldSlice.reducer;
