import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Counter from './components/Counter';
import Button from './components/Button';
function App() {
  const [count, setCount]=useState(5)
  const ivansosal =() => {
    setCount (
      count + 1
    )
  }




  return (
    <div className="App">
      <Counter count={count}/>
      <Button onClick={ivansosal}/>
      <Button onClick={ivansosal}/>
      <Button onClick={ivansosal}/>
      <Button onClick={ivansosal}/>
      <Button onClick={ivansosal}/>
    </div>
  );
}

export default App;
