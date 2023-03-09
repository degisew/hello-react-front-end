import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchGreets = createAsyncThunk(
  'getGreetsFromAPI',
  async () => {
    const response = await fetch('http://127.0.0.1:5000/roots');
    return response.json();
  },
);

const initialState = {
  greets: [],
};

const greetReducer = createSlice({
  name: 'greet',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreets.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.greets = payload;
    });
  },

});

export { fetchGreets };
export default greetReducer.reducer;
