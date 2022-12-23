import React from 'react'
import { useSelector } from "react-redux"

const Home = () => {
    const getData = useSelector((a) => a.loginReducer);
    // console.log(getData)
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>User Name: {getData.userName}</h1>
                <h1>Email: {getData.email}</h1>
                <h1>Password: {"*".repeat(getData.password.length)}</h1>
            </div>
        </>
    )
}

export default Home;