import {useEffect, useState} from "react";

function ListItem(props) {
    const [counter, setCounter] = useState({
        counter: 0
    });


    useEffect(() => {

    }, []);





    return (<div style={{
        backgroundColor: props?.item?.colour ?? "white",
        margin: "5px", padding: "5px",
        textDecoration: props.item.completed ? "line-through" : ""
    }}>
        {props.item.name}
        <button onClick={() => {
            props.onButtonClick(props.index, props.item)
        }}>X</button>

        <button onClick={() => {
            setCounter((prev) => ({
                ...prev,
                counter: prev.counter + 1
            }))
        }}>Counter: {counter.counter}</button>




    </div>);
}

export default ListItem;
