import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ServerUrl: string = "https://jsonplaceholder.typicode.com";

/* old version
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch()
    const response = await axios.get<IUser>(`${ServerUrl}/users`);
    dispatch()
  } catch (e) {
    dispatch()
  }
};*/

export const fetchUsers = createAsyncThunk(
  "fetchUsers",
  async (limit: number = 5, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(
        `${ServerUrl}/users?_limit=${limit})`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error with server");
    }
  }
);
