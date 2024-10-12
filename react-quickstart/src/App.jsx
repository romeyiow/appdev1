import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Section 8: Updating the screen a.k.a state management

function MyButton() {
  const [count, setCount] = useState(10);
  const [task, setTask] = useState(0);
  const [comments, setComments] = useState(0);
  const [state, setState] = useState("Off");
  function handleClick() {
    state == "On" ? setState("Off") : setState("On");
  }
  return (
    <>
      <button onClick={handleClick} >
        {/* Clicked {count} times */}
        {state}
      </button>
    </>
  );
}


export default function App() {
  return (
    <>
      <h3>Click the switches below</h3>
      <MyButton />
      <h6>shows separately rendered instance of the MyButton component to show how each button “remembers” its own count state and doesn’t affect
        other buttons</h6>
      <MyButton />
    </>
  )
}


