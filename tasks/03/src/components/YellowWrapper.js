import {useState} from "react";

export default function YellowWrapper(props) {
    const [counter, setCounter] = useState(0);
    return (<div style={{
        backgroundColor:  "#FFFF99",
    }}>
        <h1>{props.title}</h1>
        {props.children}

        <button onClick={() => {
            setCounter((prev) => prev + 1)
        }}>YellowWrapper counter: {counter}</button>

    </div>);
}

