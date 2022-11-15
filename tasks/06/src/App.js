import './App.css';
import {useState} from "react";
import Table from "./Table";
import YellowWrapper from "./YellowWrapper";
import UserItem from "./UserItem";
import List from "./List";
import MyTable from "./MyTable";
import {
    BrowserRouter as Router,
    useParams,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserDetail from "./UserDetail";
import EditTodoForm from "./EditTodoForm";


function UserDetailManagement() {
    let {userId} = useParams();
    return <>
        <UserDetail userId={userId}/>
        <Link to={"/"}>Zpět na přehled</Link>
    </>
}

function EditTodoManagement() {
    let {todoId} = useParams();
    return <YellowWrapper title={"Editace todo"}>
        <EditTodoForm todoId={todoId}/>
        <Link to={"/"}>Zpět na přehled</Link>
    </YellowWrapper>
}


function App() {

    //<editor-fold desc="Data definition">
    async function deleteItem(todoId) {
        const deleteItemCall = await fetch(`http://localhost:3004/todos/${todoId}`, {
            method: 'DELETE',
        });
        return await deleteItemCall.json()
    }

    async function completeItem(todoId) {
        const updateItem = {
            completed: true
        }
        const callCompleted = await fetch(`http://localhost:3004/todos/${todoId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(updateItem)
        });

        return await callCompleted.json()

    }

    const todoColumns = [
        {
            attribute: "id",
        },
        {
            attribute: "title",
            component: item => <span
                style={{textDecoration: item.completed ? "line-through" : "none"}}>
                {item.title}
            </span>
        },
        {
            attribute: "id",
            component: (item, customFunctions) => <button onClick={async () => {
                await deleteItem(item.id)
                customFunctions.reloadData()
            }}>Smazat</button>
        },
        {
            attribute: "id",
            component: (item, customFunctions) => <button onClick={async () => {
                const r = await completeItem(item.id)
                console.log(r)
                customFunctions.reloadData()
            }}>Dokončit úkol</button>
        },
        {
            attribute: "id",
            component: (item) => {
                const target = `/userDetail/${item.userId}`
                return <Link to={target}>Zobrazit detail uživatele</Link>
            }
        },
        {
            attribute: "id",
            component: (item) => {
                const target = `/editTodo/${item.id}`
                return <Link to={target}>Editovat úkol</Link>
            }
        }
    ]

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

    const usersColumns = [
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

    const usersFilter = [
        {
            title: "Name",
            filterComponent: (filterComponentOutput, setFilterComponentOutput) => <input key={"myInput"}
                                                                                         name={"myInput"}
                                                                                         value={filterComponentOutput?.myInput || ""}
                                                                                         onChange={(e) => setFilterComponentOutput((prev) => ({ ...prev, myInput: e.target.value
                                                                                         }) )}/>,
            filterFunction: (data, filterComponentOutput) => {
              return data?.filter((item) => (filterComponentOutput.myInput && filterComponentOutput.myInput.length >= 1) ? item.name.toLowerCase().startsWith(filterComponentOutput?.myInput.toLowerCase()) : true)
            }
        }
    ]
    //</editor-fold>

    return (<Router>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Úvod</Link>
                    </li>
                    <li>
                        <Link to="/declarative-table">Deklarativní seznam</Link>
                    </li>
                    <li>
                        <Link to="/declarative-table-with-filters">Deklarativní seznam s filtrem</Link>
                    </li>

                </ul>
            </nav>

            <Switch>
                <Route path="/declarative-table">
                    <YellowWrapper title={"Deklarativní seznam"}>
                        <List data={users} component={(user) => <UserItem key={"userItem" + user.id} user={user}/>}/>
                    </YellowWrapper>

                    <YellowWrapper title={"Deklarativní tabulka"}>
                        <Table data={users} columns={usersColumns}/>
                    </YellowWrapper>
                </Route>
                <Route path="/declarative-table-with-filters">
                    <YellowWrapper title={"Deklarativní tabulka s filtrem"}>
                        <Table data={todos} columns={todoColumns} filters={todosFilter}/>
                    </YellowWrapper>
                    <YellowWrapper title={"Deklarativní tabulka s filtrem"}>
                        <Table data={users} columns={usersColumns} filters={usersFilter}/>
                    </YellowWrapper>
                </Route>
                <Route path={`/userDetail/:userId`}>
                    <UserDetailManagement />
                </Route>
                <Route path={`/editTodo/:todoId`}>
                    <EditTodoManagement />
                </Route>
                <Route path="/">
                    <YellowWrapper title={"Deklarativní tabulka s načítáním TODOS ze serveru a stránkováním"}>
                        <MyTable baseUri={"http://localhost:3004/todos"} columns={todoColumns}/>
                    </YellowWrapper>

                    {/*<YellowWrapper title={"Deklarativní tabulka s načítáním USERS ze serveru a stránkováním"}>*/}
                    {/*    <MyTable baseUri={"http://localhost:3004/users"} columns={usersColumns}/>*/}
                    {/*</YellowWrapper>*/}

                </Route>
            </Switch>


        </Router>
    );


}



export default App;
