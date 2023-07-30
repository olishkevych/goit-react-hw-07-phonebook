import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsSliceReducer } from './contactsSlice.js';
import { filterSliceReducer } from './filterSlice.js';

const rootReducer = combineReducers({
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
