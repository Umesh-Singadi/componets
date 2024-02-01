import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ data }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function handleClick(index) {
    setExpandedIndex((preIndex) => {
      return preIndex === index ? "" : index;
    });
  }
  const renderedItems = data.map((item, index) => {
    return (
      <div
        key={item.id}
        className="m-4 p-4 rounded-md bg-gray-50 hover:bg-gray-200 cursor-pointer"
        onClick={() => handleClick(index)}
      >
        <div className="flex items-center justify-between font-medium ">
          <h1>{item.label}</h1>
          {expandedIndex === index ? (
            <GoChevronDown className="text-3xl" />
          ) : (
            <GoChevronLeft className="text-3xl" />
          )}
        </div>
        {expandedIndex === index && <p className="border-b">{item.content}</p>}
      </div>
    );
  });
  return <div className="border border-black rounded m-4">{renderedItems}</div>;
}

export default Accordion;
