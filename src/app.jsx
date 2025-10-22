import React from "react";
import Button from './component/button'
function App() {
  const [count, setcount] = userstate(0);
  const handleIncrement = () => {
    setcount(count + 1)
    console.log("Mon Increment :", count)
  }
  return (
    <div className=''>
      <h1>Ma constante : {count}</h1>
      <button onClick={handleIncrement}>Incrementer</button>
      <Button label="compteur"/>
    </div>
  );  
}
export default App;