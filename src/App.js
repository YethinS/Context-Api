
import './App.css';
import { useState } from 'react';
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext"

function App() {

  const [profile, setProfile] = useState(true)
  const [userName, setUsername] = useState("")
  return (
    <div className="App">
      <h1>Hello njm njm</h1>
      <LoginContext.Provider value={{ userName, setUsername , profile, setProfile}}>
        
        {profile ? <Login /> : <Profile />}

      </LoginContext.Provider>

    </div>
  );
}

export default App;
