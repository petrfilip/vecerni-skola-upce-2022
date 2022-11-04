import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function AppForm() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
      "email": "asdf@asdf.cz"
  });


  const changeUser = ()=> {
      setUser(prevState => ({...prevState, "name": input}))
    }


  return (
    <div className="App">
        <input onChange={e => setInput(e.target.value)}/>
        <button onClick={changeUser}>Change userName</button>
        <h1>Username is: {user?.name}</h1>
        <h1>Email is: {user?.email}</h1>
    </div>
  );
}

export default AppForm;
