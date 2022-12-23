import React, { useState } from 'react'
import { edit } from '../config/redux/loginReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Login = () => {

    const [data, setData] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitData = () => {
        alert("Submitted")
        // console.log(data);
        dispatch(edit(data));
        navigate("/")
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" onChange={e => setData({ ...data, userName: e.target.value })} placeholder='User Name' />
            </div>
            <div>
                <input type="text" onChange={e => setData({ ...data, email: e.target.value })} placeholder='Email' />
            </div>
            <div>
                <input type="password" onChange={e => setData({ ...data, password: e.target.value })} placeholder='Password' />
            </div>
            <div onClick={submitData}>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Login;