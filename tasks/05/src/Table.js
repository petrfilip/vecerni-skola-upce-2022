import {useEffect, useState} from "react";

export default function Table({data, columns, filters}) {

    const [filteredData, setFilteredData] = useState([] || data)
    const [filterComponentOutput, setFilterComponentOutput] = useState({})

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    useEffect(() => {
      filters && setFilteredData(...filters.map((item) => item?.filterFunction && item.filterFunction(data, filterComponentOutput)))
    }, [filterComponentOutput])

    return <>
        {filters && filters.map((item, index) =>
            item?.filterComponent && item.filterComponent(filterComponentOutput, setFilterComponentOutput) ||
            <button key={"btn" + index} onClick={()=> setFilteredData(item.filterFunction(data))}>{item.title}</button>) }

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
