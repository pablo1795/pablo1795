import React from 'react';

export interface TableHeaderProps {
  columns: (string | number)[];
  subRow?: (string | number | JSX.Element) | null;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns = [],
  subRow = null
}): JSX.Element => {
  return (
    <thead className="bg-green-900 sticky top-0 z-0">
      {columns.length > 0 ? (
        <tr>
          {columns.map((data, i) => (
            <th key={i} className="text-stone-100 py-1 px-2 uppercase">{data}</th>
          ))}
        </tr>
      ) : (
        <tr>
          <th>Las columnas del encabezado de la tabla están vacías.</th>
        </tr>
      )}
      {subRow && (
        <tr>
          <td colSpan={columns.length}>
            {subRow}
          </td>
        </tr>
      )}
    </thead>
  );
}

export default TableHeader;
