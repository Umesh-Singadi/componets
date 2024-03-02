import { useState } from "react";
function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("ase");
      sortBy(label);
      return;
    }
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
  return { sortBy, sortOrder, handleClick, sortedData };
}

export default useSort;
