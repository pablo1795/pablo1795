import { useState } from 'react';

export interface ExpandableRowProps {
  columns: (string | number | JSX.Element)[];
  subRow?: (string | number | JSX.Element) | null;
}

const ExpandableRow: React.FC<ExpandableRowProps> = ({
  columns = [],
  subRow = null
}): JSX.Element => {
  const [expandRow, setExpandRow] = useState(false)

  const handleOpenButton = () => {
    setExpandRow(!expandRow);
  };

  return (
    <>
      <tr
        className={`border-green-900 border-b-2 border-t-2 cursor-pointer ${expandRow && 'bg-stone-700'}`}
        onClick={handleOpenButton}
        title={!expandRow ? 'abrir' : 'cerrar'}
      >
        {columns.map((data, i) => <td key={i} className="text-center p-1 md:px-2">{data}</td>)}
      </tr>

      {subRow && expandRow &&
        <tr className={`border-green-900 border-b-2 border-t-2 ${expandRow && 'bg-stone-700'}`}>
          <td colSpan={10} className="p-1 md:px-2">
            {subRow}
          </td>
        </tr>
      }
    </>
  );
}

export default ExpandableRow;
