import Table from "./Table";
import {useEffect, useState} from "react";

export default function MyTable({baseUri, columns}) {


    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 3

    const fetchData = async () => {
        const response = await fetch(baseUri + `?_page=${page}&_limit=${limit}`)
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        }
        setData(await response.json())
    }

    useEffect(() => {
        fetchData()
    }, [page])



    return <div>
        <button onClick={fetchData}>Reload data</button>
        <Table data={data} columns={columns} customFunctions={{reloadData: fetchData}}/>
        <div style={{margin: "10px", padding: "10px"}}>
            <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}> « </button>
            <span>{page}</span>
            <button onClick={() => setPage((prev) => prev + 1)}> » </button>
        </div>
    </div>
}