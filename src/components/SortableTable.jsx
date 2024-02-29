import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("ase");
      setSortBy(label);
    } else if (sortOrder === "ase") {
      setSortOrder("des");
      setSortBy(label);
    } else if (sortOrder === "des") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>{column.label}</th>
      ),
    };
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "ase" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} config={updatedConfig} data={sortedData}></Table>
    </div>
  );
}

export default SortableTable;
