import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk, updateUsersFollowersThunk } from "./operations";

const listUsers = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.users = payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePendingFollowers = (state) => {
  state.isLoading = true;
};

const handleFulfilledFollowers = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const newUser = action.payload;
  const updateUsers = state.users.map((user) => {
    if (user.id === newUser.id) {
      return newUser;
    } else {
      return user;
    }
  });
  state.users = updateUsers;
};

const handleRejectedFollowers = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: listUsers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, handlePending)
      .addCase(fetchUsersThunk.fulfilled, handleFulfilled)
      .addCase(fetchUsersThunk.rejected, handleRejected)
      .addCase(updateUsersFollowersThunk.pending, handlePendingFollowers)
      .addCase(updateUsersFollowersThunk.fulfilled, handleFulfilledFollowers)
      .addCase(updateUsersFollowersThunk.rejected, handleRejectedFollowers);
  },
});

export const usersReducer = usersSlice.reducer;
