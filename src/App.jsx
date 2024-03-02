import Rout from "./components/Rout";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import Sidebar from "./components/Sidebar";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import CounterPage2 from "./pages/CounterPage2";

function App() {
  return (
    <div className="container mx-auto flex p-5 w-full">
      <Sidebar />
      <Rout path="/">
        <DropdownPage />
      </Rout>
      <Rout path="/accordion">
        <AccordionPage />
      </Rout>
      <Rout path="/buttons">
        <ButtonPage />
      </Rout>
      <Rout path="/modal">
        <ModalPage />
      </Rout>
      <Rout path="/table">
        <TablePage />
      </Rout>
      <Rout path="/counter">
        <CounterPage />
      </Rout>
      <Rout path="/counter2">
        <CounterPage2 />
      </Rout>
    </div>
  );
}

export default App;
