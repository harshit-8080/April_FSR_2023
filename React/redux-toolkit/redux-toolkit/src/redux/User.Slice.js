import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "Suraj",
    email: "harshit@gmail.com",
    age: 25,
    country: "india",
  },
  reducers: {
    increaseAge: (state, action) => {
      state.age = state.age + 1;
    },
    decreaseAge: (state, action) => {
      state.age = state.age + 1;
    },
  },
});

console.log(UserSlice.reducer);

export default UserSlice.reducer;
