import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Section 1:  Creating and nesting components

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
export default function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
    </>
  )
}


