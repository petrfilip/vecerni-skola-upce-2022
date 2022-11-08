import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Table from "./Table";
import YellowWrapper from "./YellowWrapper";
import UserItem from "./UserItem";
import List from "./List";
import MyTable from "./MyTable";

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

    const users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }
    ]

    const columnsUserTable = [
        {
            attribute: "name"
        },
        {
            attribute: "phone"
        },
        {
            attribute: "email"
        },
        {
            attribute: "userName",
            component: (item) => <button>{item.id}</button>
        }, {
            attribute: "userName",
            component: (item) => <UserItem user={item}/>
        }
    ]

    const todosFilter = [
        {
            title: "Active",
            filterFunction: (data) => data.filter((item) => !item.completed)
        },
        {
            title: "Completed",
            filterFunction: (data) => data.filter((item) => item.completed)

        }
    ]

    const usersFilter = [
        {
            title: "Name",
            filterComponent: () => <input/>,
            filterFunction: (data, filterComponentOutput) => data.filter((item) => item.startsWith(filterComponentOutput))
        }
    ]

    return (<>
            <YellowWrapper title={"Deklarativní seznam"}>
                <List data={users} component={(user) => <UserItem user={user}/>}/>
            </YellowWrapper>

            <YellowWrapper title={"Deklarativní tabulka"}>
                <Table data={users} columns={columnsUserTable}/>
            </YellowWrapper>

            <YellowWrapper title={"Deklarativní tabulka s filtrem"}>
                <Table data={todos} columns={columns} filters={todosFilter}/>
            </YellowWrapper>
            <YellowWrapper title={"Deklarativní tabulka s filtrem"}>
                <Table data={users} columns={columnsUserTable} filters={usersFilter}/>
            </YellowWrapper>

            <YellowWrapper title={"Deklarativní tabulka s načítáním TODOS ze serveru a stránkováním"}>
                <MyTable baseUri={"http://localhost:3004/todos"} columns={columns}/>
            </YellowWrapper>

            <YellowWrapper title={"Deklarativní tabulka s načítáním USERS ze serveru a stránkováním"}>
                <MyTable baseUri={"http://localhost:3004/users"} columns={columnsUserTable}/>
            </YellowWrapper>

        </>
    );
}

export default App;
