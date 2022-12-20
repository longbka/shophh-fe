import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from '~/setup/instance';
const initialState = {
  listProducts: [],
  isError: false,
  isLoading: true,
};

export const fetchAllProducts = createAsyncThunk('api/fetAllProducts', async () => {
  const response = await axios.get('/api/products?populate=*', {
    headers: { Authorization: `Bearer ${Cookies.get('jwt')}` },
  });
  console.log(response.data[1].attributes)
  return response.data;
});
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        // Add user to the state array
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        // Add user to the state array
        state.listProducts = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        // Add user to the state array
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
