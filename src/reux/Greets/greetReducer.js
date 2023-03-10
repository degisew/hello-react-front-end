import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchGreetingAsyncThank = createAsyncThunk(
  'fetchGreetingAsyncThank',
  async () => {
    const response = await fetch('http://127.0.0.1:5000/roots');
    const data = response.json();
    return data;
  },
);

const initialState = {
  greets: [],
};

const greetReducer = createSlice({
  name: 'greet',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreetingAsyncThank.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.greets = payload;
    });
  },
});

export { fetchGreetingAsyncThank };
export default greetReducer.reducer;
