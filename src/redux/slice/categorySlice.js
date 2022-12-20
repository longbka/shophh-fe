import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/setup/instance';
const initialState = {
  listCategory: [],
  isError: false,
  isLoading: true,
};
export const fetchAllCategory = createAsyncThunk('api/fetchAllCategory', async () => {
  const response = await axios.get('/api/categories');
  return response.data;
});
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllCategory.pending, (state, action) => {
        // Add user to the state array
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        // Add user to the state array
        state.listCategory = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchAllCategory.rejected, (state, action) => {
        // Add user to the state array
        state.isError = true;
      });
  },
});

export default categorySlice.reducer;
