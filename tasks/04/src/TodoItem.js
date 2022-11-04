import {useState} from "react";

export default function TodoItem({todoItem, onDone}) {
    const [counter, setCounter] = useState(0)
    return <div
        style={{
            textDecoration: todoItem.completed ? "line-through" : "",
            margin: '5px',
            padding: '5px',
            backgroundColor: todoItem?.colour ?? "deepskyblue",
        }}
    >
        {todoItem.title}

        {!todoItem.completed && <button onClick={() => onDone(todoItem.id)}>X</button>}

        {counter <= 3 && <button onClick={() => {
            setCounter((prevCounter) => prevCounter + 1)
        }}>Click counter: {counter}</button>}

        {counter > 3 && <button onClick={() => {
            setCounter(0)
        }}>RESET</button>}
    </div>
}