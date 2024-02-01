import Accordion from "../components/Accordion";

function AccordionPage() {
  const data = [
    {
      id: 1,
      label: "What is React and why is it used?",
      content:
        "React is a JavaScript library for building user interfaces. It is used for creating interactive and reusable UI components in web applications.",
    },
    {
      id: 2,
      label: "Explain the virtual DOM in React.",
      content:
        "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by updating only the parts of the DOM that have changed, rather than re-rendering the entire DOM.",
    },
    {
      id: 3,
      label: "What is JSX?",
      content:
        "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML within your JavaScript code.",
    },
    {
      id: 4,
      label: "What are state and props in React?",
      content:
        "State is an internal data store in React components that can be changed over time. Props (short for properties) are inputs to a React component that are passed in from its parent component.",
    },
    {
      id: 5,
      label: "Explain the concept of lifting state up in React.",
      content:
        "Lifting state up is the process of moving the state from a child component to its parent component in order to share the state among multiple components.",
    },
    {
      id: 6,
      label: "What is the purpose of the useEffect hook in React?",
      content:
        "The useEffect hook in React is used for handling side effects in functional components. It is commonly used for tasks such as data fetching, subscriptions, or manually changing the DOM outside the render phase.",
    },
    {
      id: 7,
      label: "What is the role of the useState hook?",
      content:
        "The useState hook is used in functional components to add state management. It allows components to have state variables that can be updated, triggering a re-render of the component with the updated state.",
    },
    {
      id: 8,
      label: "Explain the concept of controlled components in React forms.",
      content:
        "Controlled components in React forms are components whose form elements are controlled by React state. The value of the form elements is controlled by React state, and any changes are handled through React state and not directly by the DOM.",
    },
    {
      id: 9,
      label: "What is the purpose of React Router?",
      content:
        "React Router is a library for implementing navigation in React applications. It enables the creation of single-page applications with dynamic, client-side routing.",
    },
    {
      id: 10,
      label: "What are Higher-Order Components (HOCs) in React?",
      content:
        "Higher-Order Components are functions that take a component and return a new component with additional features or behavior. They are used for code reuse, logic abstraction, and enhancing components in React.",
    },
  ];

  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

export default AccordionPage;
