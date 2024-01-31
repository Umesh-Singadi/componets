import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ data }) {
  const [expandedIndex, setExpandedIndex] = useState();
  const renderedItems = data.map((item, index) => {
    return (
      <div
        className="m-4 border-2 border-black  p-4 rounded-md"
        onClick={() => setExpandedIndex(index === expandedIndex ? "" : index)}
      >
        <div className="flex items-center justify-between">
          <h1>{item.label}</h1>
          {expandedIndex === index ? (
            <GoChevronDown className="text-3xl" />
          ) : (
            <GoChevronLeft className="text-3xl" />
          )}
        </div>
        {expandedIndex === index && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
