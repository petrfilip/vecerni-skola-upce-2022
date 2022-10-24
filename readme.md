# 1 - JavaScript, Historie, Trendy, FrameWorky
(04-10-2022)
- prezentace

Workshop: 
  - pomocí HTML a JavaScriptu vytvořte následující funkcionalitu:
    - show-hide 
    - formulář, který vkládá do seznamu
    - bonus: z formuláře lze odebírat

Domácí úkol:
- rozjet prostředí (npx create-react-app) + commit vytvořené výchozí komponenty

# 2  - React - syntaxe, principy, první aplikace
(11-10-2022)
- vytvoření komponenty
- kompozice komponent (children)
- základní stylování
- props a useState

Workshop:
- vytvoření první komponety (`<ListItem item={}>`) založené na `<div>` na výpis prvrku
- výpis položek seznamu do komponenty `<ListItem>`
- přidávání do seznamu
- použití onChange na `<input>`
- validovat data ve vstupním poli a vykreslit stylovanou `<Error>` komponentu
- ukázat použití reference na funkci

Domácí úkol
- přidání druhého vstupního prvku typu `<select>` pro výběr barvy
- hodnota barvy se použije pro styl
![](img.png)

# 3 - React - props vs state, useEffect
(18-10-2022)
- opakování - přidání přeškrtnutí položky v seznamu (ukázka callbacku)
- správné použití useEffect((v) => v+1)
- využití useEffect, závislostí a cleanup
```
useEffect( () => {
  setNumber(number + 1)
}, [number])
```


```
useEffect( () => {
  const interval = setInterval(() => {
    setNumber((prev) => prev + 1)
  }, 1000);
  
  return () => { //cleanup function
    clearInterval(interval)
  }
}, [number])
```


# 4 - React - props vs state, useEffect
(25-10-2022)
- napojení localStorage a cookies
- vytvořte stránkovatelný seznam

# 5 - React - procvičování
(01-11-2022)
- filtrování dle atributů

# 6 - React - npm, webpack a knihovny
(08-11-2022)
- načítání dat ze serveru
- jsonserver

# 7 - React - napojení na backend + zadání projektu
(15-11-2022)
- UI knihovny
- CSS in JS
- react router

# 8 - projekt - konzultace
(22-11-2022)
- zadání práce

# 9 - projekt - konzultace
(29-11-2022)

# 10 - projekt - hodnocení
(6-12-2022)
