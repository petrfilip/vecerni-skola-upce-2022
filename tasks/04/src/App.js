import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";

function App() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        }
        setData(await response.json())
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    const onDone = (id) => {
        setData((prevData) => {
            prevData[prevData.findIndex((obj => obj.id === id))].completed = true;
            return [...prevData]
        })
    }

    return (
        <div className={"App"}>
            <button onClick={() => {
                setFilteredData(data)
            }}>All
            </button>

            <button onClick={() => {
                setFilteredData(data.filter((item) => item.completed))
            }}>Active ({(data.filter((item) => item.completed).length)})
            </button>

            <button onClick={() => {
                setFilteredData(data.filter((item) => !item.completed))
            }}>Completed ({(data.filter((item) => !item.completed).length)})
            </button>


            {filteredData.map((i, index) =>
                <TodoItem onDone={onDone} key={index} todoItem={i}/>)}
        </div>
    );
}

export default App;
