import { useState } from "react";

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
        </div>
        {expandedIndex === index && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
