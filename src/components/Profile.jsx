import React , { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Profile() {

    const { user } = useContext(LoginContext)
  return (
    <div>
        <h3>Hi i am user { user }</h3> 
    </div>
  )
}

export default Profile