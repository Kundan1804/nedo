import { useState, useEffect } from "react"
import axios from "../api/axios";

function Users() {
    const [users, setusers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async() => {
            try{
                const response = await axios.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setusers(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])

  return (
    <article>
        <h2>Users List</h2>
        {users?.length
            ? (
                <ul>
                    {users.map((user, i) => <li key={i}>{user?.
                    username}</li>)}
                </ul>
            ):<p>No Users</p>
        }
    </article>
  )
}

export default Users