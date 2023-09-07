import React, { FC } from "react";
import { IUser } from "../models/IUser";

interface UserContainerProps {
  user: IUser;
}

function UserContainer(props: UserContainerProps) {
  const { name, id, email } = props.user;

  return (
    <div className="bg-neutral-200 p-4 rounded-sm ">
      <p className=" font-bold">
        <span className="mr-2">{id}</span>
        {name}
      </p>

      <p className="text-red-700 font-medium">{email}</p>
    </div>
  );
}

export default UserContainer;
