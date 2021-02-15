import React from "react";
import IUser from "../interfaces/IUser";

interface Props {
    user: IUser;
}

export const UserItem: React.FC<Props> = ({user}) => {
    return (
        <li>
            {user.name} <span className='username'>@{user.username}</span>
        </li>
    );
};