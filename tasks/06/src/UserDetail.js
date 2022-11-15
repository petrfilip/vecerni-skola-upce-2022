import {useEffect, useState} from "react";

export default function ({userId}) {

    const [data, setData] = useState({})

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3004/users/${userId}`)
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        }
        setData(await response.json())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}