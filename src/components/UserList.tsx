import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userAPI } from "../services/userService";
import UserContainer from "./UserContainer";
import { fetchUsers } from "../store/reducers/ActionCreator";

function UserList() {
  const [limit, setLimit] = useState(0);

  //toolkit redux
  const {
    users: usersToolkit,
    loading: loadingToolkit,
    error: errorToolkit,
  } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers(limit));
  }, [limit]);

  //RTK query
  const {
    data: usersRTKquery,
    isLoading: loadingRTKquery,
    isError: errorRTKquery,
  } = userAPI.useFetchAllUsersQuery(limit);

  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <button
          className=" bg-gray-200 border-gray-500 border-2 px-4 py-2 rounded-sm"
          onClick={() => setLimit(limit + 1)}
        >
          Add new data
        </button>
      </div>
      <div className="flex gap-2">
        <div className=" rounded-lg shadow-lg p-4">
          <h1 className="text-xl font-bold text-center">
            Content contains by reduxToolkit
          </h1>
          {loadingToolkit && (
            <h1 className="text-4xl text-center">loading data</h1>
          )}
          {errorToolkit && (
            <h1 className="text-4xl text-center">{errorToolkit}</h1>
          )}
          {!loadingToolkit && !errorToolkit && (
            <div className="grid grid-cols-2 gap-2">
              {usersToolkit?.map((user) => (
                <UserContainer key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
        <div className=" rounded-lg shadow-lg p-4">
          <h1 className="text-xl font-bold text-center">
            Content contains by RTK query
          </h1>
          {loadingRTKquery && (
            <h1 className="text-4xl text-center">loading data</h1>
          )}
          {errorRTKquery && <h1 className="text-4xl text-center">eo</h1>}
          {
            <div className="grid grid-cols-2 gap-2 ">
              {usersRTKquery?.map((user) => (
                <UserContainer key={user.id} user={user} />
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default UserList;
