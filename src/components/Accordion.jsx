function Accordion({ data }) {
  const renderedItems = data.map((item) => {
    return (
      <div className="m-4 border-2 border-black  p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1>{item.label}</h1>
        </div>
        <p>{item.content}</p>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
