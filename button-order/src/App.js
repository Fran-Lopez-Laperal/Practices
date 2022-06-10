import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const numbers = [8,5,3,23,53,65,12,6,6,8,23,43,54,64,5,23]


function App() {

  const [state, setState] = useState(numbers)

  useEffect(() => {
      setState()
  }, [state])
  
console.log(state)
  function handleClickL(){
    setState(
      numbers.sort((a,b) => a - b)
    )
  }
  
  function handleClickS(){
    setState(
      numbers.sort((a,b) => b - a)
    )
  }

  return (
    <div className="App">
      <button onClick={handleClickL}>+</button>
      <button onClick={handleClickS}>-</button>
      <h4>{numbers}</h4>
    </div>
  );
}

export default App;
