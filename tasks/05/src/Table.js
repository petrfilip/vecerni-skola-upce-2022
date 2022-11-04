export default function Table({data, columns}) {
    return <table>
        <tbody>
        {data.map((item) => {
            return <tr key={"tr" + item.id}>
                {columns.map((column, index) =>
                    <td key={"td-" + item.id + "index" + index}>{(column?.component && column?.component(item)) ?? item[column.attribute]}</td>
                )}
            </tr>
        })}
        </tbody>
    </table>
}