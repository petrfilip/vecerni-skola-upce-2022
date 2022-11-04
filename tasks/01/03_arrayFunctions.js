const personArray = [
    {
        "name": "Petr",
        "age": 18
    },
    {
        "name": "Roman",
        "age": 44
    },
];

// add ID
const indexedPersonArray = personArray.map((person, index) => {
    return {...person, id: index}
})
console.log(indexedPersonArray)

// todo filter
const filteredIndexedPersonArray = indexedPersonArray.filter((el) => {
    return el.age > 18
})
console.log(filteredIndexedPersonArray)