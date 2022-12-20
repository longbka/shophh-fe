import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {
    userId: '',
    fullName: '',
    email: '',
    address: '',
    phoneNuber: '',
    username: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfomation(state, action) {
       state.user = { ...action.payload };
    },
  },
});
export const { setUserInfomation } = userSlice.actions;
export default userSlice.reducer;
