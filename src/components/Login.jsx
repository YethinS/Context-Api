import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login() {

    const { setUsername, profile, setProfile }   = useContext(LoginContext)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <input type='text' placeholder='User Name' style={{ margin: "5px", borderRadius: "5px", padding: "5px" }} onChange={(e) => setUsername(e.target.value)}/>

            <button style={{ margin: "10px" }} onClick={()=> setProfile(!profile)}>LOGIN</button>
        </div>
    )
}

export default Login