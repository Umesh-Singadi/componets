import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count++ };
    case "decrement":
      return { ...state, count: state.count-- };
    case "valueToAdd":
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: "",
      };
    case "inputValue":
      return { ...state, valueToAdd: action.payload };
    default:
      return state;
  }
};
function CounterPage2() {
  const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 100 });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function addInputValue() {
    dispatch({ type: "valueToAdd" });
  }
  return (
    <Panel>
      <h1>Count is {state.count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add lot! </label>
        <input
          type="number"
          className="border border-black"
          value={state.valueToAdd}
          onChange={(e) =>
            dispatch({ type: "inputValue", payload: parseInt(e.target.value) })
          }
        />
        <Button onClick={addInputValue}>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage2;
