import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSclice';

export const UserView = () => {
    const users = useSelector((state) => state.user.users);
    const isloading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchUsers())}, [dispatch]);
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'yellow'}}>
            { isloading ? <p>loading...</p> :
                (<><h2>Users List</h2><ol>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ol></>)
            }
            { !isloading && error && <p>Error: {error}</p>}
        </div>
    )
}