import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewUser() {

    let navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user;

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border shadow rounded p-4 mt-2'>
                    <h2 className='text-center m-4'>User Details</h2>

                    <div className='card'>
                        <div className='card-header text-center'>
                            Details of user id: {user.id}
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b> {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username:</b> {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b> {user.email}
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className='btn btn-primary my-2' to={"/"}>Back to home</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
