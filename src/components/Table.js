import { Fragment } from "react";

function Table({ data, config, keyFn }) {

  const renderedHeaders = config.map((column) => {
    if(column.header) {
      // Fragment is a React component that allows us to return multiple elements from a function.
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });
// We need to do 3 map functions to render the table. 
// The first map function is to render the headers.  
// The second map function is to render the rows.  
// The third map function is to render the cells.
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td className="p-2" key={column.label}>{column.render(rowData)}</td>;
    });
    return (
      <tr key={keyFn(rowData)} className="border-b-2">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;