import Table from "./Table";
import useSort from "../hooks/use-sort";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, handleClick, sortedData } = useSort(data, config);
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
