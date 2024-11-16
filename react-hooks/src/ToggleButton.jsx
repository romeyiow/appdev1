import { useState } from "react"

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleButton = () => {
        setIsOn (isOn ? false:true)
    }
    return (
        <div className="toggle-button-component">
            <h3>The button is {isOn ? "ON" :"OFF"}</h3>
            <button onClick={toggleButton}>Click Me!</button>
        </div>
    )
}

export default ToggleButton;