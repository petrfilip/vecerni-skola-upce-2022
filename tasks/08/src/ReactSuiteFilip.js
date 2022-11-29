import Table from 'rsuite/Table';
const { Column, HeaderCell, Cell } = Table;

export default function ReactSuiteFilip({data}) {
    return  <Table
        height={400}
        data={data}
        onRowClick={rowData => {
            alert(JSON.stringify(rowData));
        }}
    >
        <Column width={60} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
        </Column>

        <Column width={150}>
            <HeaderCell>Title</HeaderCell>
            <Cell dataKey="title" />
        </Column>

    </Table>;
}