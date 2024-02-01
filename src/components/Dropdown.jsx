import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="w-48 relative">
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow-lg bg-white w-full"
      >
        {value ? value.label : "Select..."}
        <div>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</div>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 w-full shadow-lg bg-white">
          {renderedItems}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
