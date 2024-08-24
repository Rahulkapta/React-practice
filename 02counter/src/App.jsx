import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15)

  // let counter =15
  const Addvalue =()=>{
    if(counter <20)
    setCounter(counter+1)
    
  }
  const Removevalue =()=>{
    if(counter >0)
    setCounter(counter-1)
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={Addvalue}>Add value  : {counter}</button>
      <button onClick={Removevalue}>Remove value : {counter}</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
