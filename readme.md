# 1 - JavaScript, Historie, Trendy, FrameWorky

(04-10-2022)

- prezentace

Workshop:

- pomocí HTML a JavaScriptu vytvořte následující funkcionalitu:
    - show-hide
    - formulář, který vkládá do seznamu
    - bonus: z formuláře lze odebírat

| Skryj-Ukaž           | Seznam              |
|----------------------|---------------------|
| ![](show-hide.gif)  | ![](add-to-list.gif) |

Domácí úkol:

- rozjet prostředí + commit vytvořené výchozí komponenty

```shell
npx create-react-app my-app
cd my-app
npm start
```

# 2 - React - syntaxe, principy, první aplikace

(11-10-2022)

- vytvoření komponenty
- kompozice komponent (children)
- základní stylování
- props a useState

Workshop:

- vytvoření první komponety (`<ListItem item={}>`) založené na `<div>` pro výpis prvrku
- výpis položek seznamu do komponenty `<ListItem>`
- přidávání do seznamu
- použití onChange na `<input>`
- validovat data ve vstupním poli a vykreslit stylovanou `<Error>` komponentu
- ukázat použití reference na funkci

Domácí úkol

- přidání druhého vstupního prvku typu `<select>` pro výběr barvy
- hodnota barvy se použije pro styl
  ![](img.png)

# 3 - React - opakování

(18-10-2022)
Workshop

- přidání přeškrtnutí položky v seznamu
- serializace JSON objektu
- props.children (kompozice)
- počítadlo
- reference na funkci
- řízené a neřízené vstupy

```javascript
function App() {
    const [data, setData] = useState({
        inputValue: "",
        inputValueColour: "deepskyblue"
    });

    const setFormValue = (event) => {
        setData((prevData) =>
            ({...prevData, [event.target.name]: event.target.value}))
    }

    return <input value={data.inputValue}
                  name="inputValue"
                  type="text"
                  onChange={setFormValue}/>;
}
```

![](03.png)

# 4 - React - props vs state, useEffect

(25-10-2022)

- využití useEffect, závislostí a cleanup
- načítání dat ze serveru

```javascript
useEffect(() => {
    setNumber(number + 1)
}, [number])
```

```javascript
useEffect(() => {
    const interval = setInterval(() => {
        setNumber((prev) => prev + 1)
    }, 1000);

    return () => { //cleanup function
        clearInterval(interval)
    }
}, [number])
```

```javascript
 const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
        throw new Error('Data could not be fetched!')
    }
    setData(await response.json())
}

useEffect(() => {
    fetchData()
}, []) // load only once
```

# 5 - React - opakování

(01-11-2022)

opakování

- filtrování dle atributů (na straně klienta)
- callbacky z podřízené komponenty
- stavy v různých komponetách

![](04.gif)

# 6 - React - implementace deklarativní komponenty

(08-11-2022)


Workshop:
- deklarativní seznam
- deklarativní tabulka
- univerzální načítání ze serveru
- deklarativní filtrování dle atributů (na klientu)
- [jsonserver](https://www.npmjs.com/package/json-server)

```shell
npm install -g json-server
```

```shell
json-server --watch db.json --port 3004
```

```javascript

const data = [
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

const columns = [
    {
        attribute: "title"
    },
    {
        attribute: "id",
        component: (item) => <button>{item.id}</button>
    }
]

return <Table data={data} columns={columns}/>;
```
![](06.png)

Úkol:
- přidejte stránkování (stránkování na serveru)
- přidejte řazení (volitelné)


![](06-b.gif)

# 7 - React - npm a užitečné knihovny

(15-11-2022)

- UI knihovny
- Styled components
- React router
- práce s REST API (GET, PUT, POST, DELETE)

Úkol:
  - po kliknutí na tlačítko zobrazte detail uživatele, který založil tásk
  - po kliknutí na tlačítko změnte stav úkolu

# 8 - projekt - zadání práce a ukládání dat na straně klienta

(22-11-2022)

- napojení localStorage a cookies
- useContext
- zadání práce

# 9 - projekt - konzultace

(29-11-2022)

# 10 - projekt - hodnocení

(6-12-2022)

- vyhodnocení semestrální práce
- nasazení aplikace na server
