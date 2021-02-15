import React from "react";
import {UserItem} from "./Usertem";
import IUser from "../interfaces/IUser";

interface Props {
    users: IUser[];
    searchString: string | null;
}

export const UserList: React.FC<Props> = ({users, searchString}) => {
    return (
        <ol>
            {users.filter((data) => {
                if (searchString == null)
                    return data
                else if (data.name.toLowerCase().includes(searchString.toLowerCase())) {
                    return data
                }
            }).map(user => (
                <UserItem user={user}/>
            ))}
        </ol>
    );
};