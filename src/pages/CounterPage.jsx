import { useState } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

function CounterPage() {
  const [count, setCount] = useState(20);
  const [valueToAdd, setValueToAdd] = useState(0);

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
      <h1 className="text-lg">Count is {count}</h1>
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
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
