import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Table from "./Table";
import YellowWrapper from "./YellowWrapper";

function App() {

    const [data, setData] = useState([])

    const columns = [
        {
            attribute: "title"
        },
        {
            attribute: "id",
            component: (item) => <button>{item.id}</button>
        }
    ]


    const fetchData = async () => {
        const response = await fetch('http://localhost:3004/todos')
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        }
        setData(await response.json())
    }

    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ]

    return (
        <YellowWrapper title={"Deklarativní tabulka"}>
            <Table data={todos} columns={columns} />
        </YellowWrapper>
    );
}

export default App;
