import { useState, useEffect, useRef } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

function CounterPage() {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const inputElement = useRef();
  function focusInput() {
    inputElement.current.focus();
  }

  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = count;
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  const handleChange = (e) => {
    setValueToAdd(parseInt(e.target.value));
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Panel>
      <div className="flex">
        <h1 className="text-lg mr-2">Current Count : {count} </h1>
        <h1 className="text-lg">
          Previous Count : {previousInputValue.current}
        </h1>
      </div>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Ad a lot</label>
        <input
          type="number"
          className="p-2 m-4 bg-gray-50 border border-black "
          onChange={handleChange}
          value={valueToAdd || ""}
          placeholder="Type..."
          ref={inputElement}
        />
        <Button>Add it!</Button>
      </form>
      <div>
        <h1>Render Count is : {renderCount.current}</h1>
        <Button onClick={focusInput}>Focus Input</Button>
      </div>
    </Panel>
  );
}

export default CounterPage;
