import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedData = useLoaderData();

    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }

    return (
        <div>
            <h2>Update information of {loadedData.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type='text' name='name' defaultValue={loadedData?.name} id='' />
                <br />
                <input type='email' name='email' defaultValue={loadedData?.email} id='' />
                <br />
                <input type='submit' value='Add user' />

            </form>
        </div>
    );
};

export default Update;