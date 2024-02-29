import { useState } from "react";
import Table from "./Table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

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
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
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
      <Table {...props} config={updatedConfig} data={sortedData}></Table>
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <FaAngleUp />
        <FaAngleDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <FaAngleUp />
        <FaAngleDown />
      </div>
    );
  } else if (sortOrder === "ase") {
    return (
      <div>
        <FaAngleUp />
      </div>
    );
  } else {
    return (
      <div>
        <FaAngleDown />
      </div>
    );
  }
}
export default SortableTable;
