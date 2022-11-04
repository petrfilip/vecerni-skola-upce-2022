import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number+1);
  }

  const increaseAsync = () => {
    setTimeout(()=> {
      setNumber((currentNumber) => currentNumber + 1)
      //setNumber(number + 1)
    }, 2000)
  }


  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
