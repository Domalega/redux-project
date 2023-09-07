import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/IUser";

const ServerUrl: string = "https://jsonplaceholder.typicode.com/";

export const userAPI = createApi({
  reducerPath: "userAPI/users",
  baseQuery: fetchBaseQuery({ baseUrl: ServerUrl }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: "/users",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
