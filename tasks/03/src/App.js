import logo from './logo.svg';
import ListItem from "./components/list/ListItem";
import {useState} from "react";
import Error from "./components/notification/Error";
import YellowWrapper from "./components/YellowWrapper";

function App() {
    const initialArray = [{name: "Sekera", colour: "hotpink", completed: false}]

    const [items, setItems] = useState(initialArray);
    const [data, setData] = useState({
        inputValue: "",
        inputValueColour: "deepskyblue"
    });

    const setFormValue = (event) => {
        setData((prevData) =>
            ({...prevData, [event.target.name]: event.target.value}))
    }

    return (
        <div>
            <h1>Seznam</h1>
            <input value={data.inputValue} name="inputValue" type="text" onChange={setFormValue}/>
            <select value={data.inputValueColour} name="inputValueColour" onChange={setFormValue}>
                <option value="lime">Zelená</option>
                <option value="salmon">Červená</option>
                <option value="deepskyblue">Modrá</option>
                <option value="darkviolet">Fialová</option>
            </select>
            <button onClick={() => {
                setItems((currentItems) => [
                    ...currentItems,
                    {colour: data.inputValueColour, name: data.inputValue}
                ]);
                setData({})
            }}>Vlož
            </button>

            {data?.inputValue?.length > 0 && data?.inputValue?.length < 5 &&
                <Error error="Nevalidní vstup" message={"Položku musí mít více než 4 znaky"}/>}

            {items.map((item, index) => <ListItem
                index={index}
                onButtonClick={(indexOfObject, onClickedObject) => {
                    setItems((it) => {
                        it[indexOfObject].completed = !it[indexOfObject]?.completed;
                        return [...it];
                    })
                }} key={index} item={item}/>)}


            <YellowWrapper title={"Yellow wrapper title"}>
                {items.map((item, index) => <ListItem
                    index={index}
                    onButtonClick={(indexOfObject, onClickedObject) => {
                        setItems((it) => {
                            it[indexOfObject].completed = !it[indexOfObject]?.completed;
                            return [...it];
                        })
                    }} key={index} item={item}/>)}
            </YellowWrapper>

            <YellowWrapper title={"Yellow wrapper JSON title"}>
                    <pre>
                    {JSON.stringify(items, null, 2)}
                        </pre>
            </YellowWrapper>


        </div>
    )
}

export default App;
