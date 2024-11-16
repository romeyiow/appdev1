import { useState } from "react"

const TextInput = () => {
    const [inputValue, setInputValue] = useState('')

    const updateValue = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="toggle-button-component">
            <input
                type="text"
                placeholder="Enter a value"
                onChange={updateValue}
            />
            <h2>{inputValue === '' ?  "\"input value will appear here\"": inputValue}</h2>
        </div>
    )
}

export default TextInput;