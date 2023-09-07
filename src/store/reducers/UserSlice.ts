import { error } from "console";
import { IUser } from "../../models/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreator";

interface UserState {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    [fetchUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
