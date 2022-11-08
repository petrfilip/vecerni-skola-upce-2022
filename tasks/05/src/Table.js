import {useEffect, useState} from "react";

export default function Table({data, columns, filters}) {

    const [filteredData, setFilteredData] = useState([] || data)

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    return <>
        {filters && filters.map((item) =>
            item?.filterComponent && item.filterComponent() ||
            <button onClick={()=> setFilteredData(item.filterFunction(data))}>{item.title}</button>) }

        <table>
        <tbody>
        {filteredData?.map((item) => {
            return <tr key={"tr" + item.id}>
                {columns.map((column, index) =>
                    <td key={"td-" + item.id + "index" + index}>
                        {(column?.component && column?.component(item)) ?? item[column.attribute]}
                    </td>
                )}
            </tr>
        })}
        </tbody>
    </table>
    </>
}