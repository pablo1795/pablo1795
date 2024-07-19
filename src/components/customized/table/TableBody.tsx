import ExpandableRow from './ExpandableRow';

export interface TableBodyProps {
  tbodyData: Array<{
    columns: (string | number | JSX.Element)[];
    subRow?: (string | number | JSX.Element) | null;
  }>
  theadLength: number;
}

const TableBody: React.FC<TableBodyProps> = ({
  tbodyData = [{
    columns: [],
    subRow: null
  }],
  theadLength = 1
}): JSX.Element => {
  return (
    <tbody>
      {tbodyData.length > 0 ? (
        tbodyData.map((data, i) =>
          data.subRow ? (
            <ExpandableRow
              key={i}
              columns={data.columns}
              subRow={data.subRow}
            />
          ) : (
            <tr key={i} className="border-b-2 border-t-2 border-green-900">
              {data.columns.map((data, j) => <td key={j} className="text-center p-1 md:px-2">{data}</td>)}
            </tr>
          )
        )
      ) : (
        <tr>
          <td className="text-center p-1 md:px-2" colSpan={theadLength}>
            <p className="h-full flex justify-center items-center">columnas de tabla vacias..</p>
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default TableBody;
