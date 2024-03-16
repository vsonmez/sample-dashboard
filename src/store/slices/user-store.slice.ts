import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserType from "../../user/models/user.type";
import AppStore from "..";
import http from "../../http";

namespace UserStore {
  export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await http.get<UserType>("/auth/me");
    return response.data;
  });
  type UserStoreType = {
    user: UserType;
  };
  const initialState: UserStoreType = {
    user: undefined,
  };
  const userStoreSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
      reset(state) {
        state.user = undefined;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
    },
  });
  export const actions = userStoreSlice.actions;
  export const reducer = userStoreSlice.reducer;
  export const select = {
    user: (state: AppStore.RootState) => state.user.user,
  };
}

export default UserStore;
