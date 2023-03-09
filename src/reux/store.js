import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './Greets/greetReducer';

const store = configureStore({
  reducer: {
    greetReducer,
  },
});

export default store;
