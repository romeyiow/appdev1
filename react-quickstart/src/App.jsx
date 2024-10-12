import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Section 6: Rendering lists 
export default function App() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const listItems = products.map(product => //.map() iterates listItems elements 
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}

    </li>
  );
  return (
    <>
      <h1>List of Products</h1>
      <ul>{listItems}</ul>
    </>
  )
}


