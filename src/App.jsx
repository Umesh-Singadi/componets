import Link from "./components/Link";
import Rout from "./components/Rout";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
function App() {
  return (
    <div>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/accordion">Accordion</Link>
      <Rout path="/dropdown">
        <DropdownPage></DropdownPage>
      </Rout>
      <Rout path="/accordion">
        <AccordionPage></AccordionPage>
      </Rout>
    </div>
  );
}

export default App;
