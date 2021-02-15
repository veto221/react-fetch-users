import React, {useEffect, useState} from 'react';
import './App.css';
import {UserList} from "./components/UserList";
import {getFromUrl} from "./hooks/fetch";
import IUser from "./interfaces/IUser";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchString, setSearchString] = useState<string | null>(null)
    useEffect(() => {
        getFromUrl<IUser[]>("https://jsonplaceholder.typicode.com/users").then(result => (setUsers(result)));
    }, []);

    return (
        <div className="App">
            <h2>Users list</h2>
            <input type="text" placeholder="Search by user name" onChange={(e) => setSearchString(e.target.value)}/>
            <UserList users={users} searchString={searchString}/>
        </div>
    );
}
export default App;
