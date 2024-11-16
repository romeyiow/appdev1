import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const decrementCount = () => {
        setCount(count-1)
    }

    const incrementCount = () => {
        setCount(count+1)
    }
    return (
        <div className="counter-component">
            <h3> Current Value of Count: {count}</h3>
            <button onClick={decrementCount}> Decrement (-) </button>
            <button onClick={incrementCount}> Increment (+) </button>
        </div>
    )
}

export default Counter;