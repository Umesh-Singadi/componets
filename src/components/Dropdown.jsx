import { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedItems = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>{value ? value.label : "Select..."}</div>
      {isOpen && <div>{renderedItems}</div>}
    </div>
  );
}

export default Dropdown;
