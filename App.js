import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import Navbar from '../components/Layout/Navbar';

function App() {
  const [counter, setCounter] = useState(0);

  const add =()=>{

    setCounter((prev) => {
      if (prev < 20) {
        return prev + 1;
      }

      else {
        return 20;
      }
  });
    }

  const subtract =()=> {

    setCounter((next) => {
      if (next < 0) {
        return next + 1;
      }

      else {
        return 0;
      }
    });

  };


  return (
    <div className="App">
  <Navbar />

      <button onClick={add}>+</button>
        <p>{counter}</p> 
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default App;
