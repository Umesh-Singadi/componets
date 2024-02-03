import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handle = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handle, true);
    return () => {
      document.removeEventListener("click", handle, true);
    };
  }, []);
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
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value ? value.label : "Select..."}
        <div>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</div>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}

export default Dropdown;
