import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();

    const handleDeleteuser = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers: {
            //   'content-type': 'application/json'
            // },
            // body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button
                            onClick={() => handleDeleteuser(user._id)}>x</button></p>)
                }
            </>
        </div>
    );
};

export default Users;