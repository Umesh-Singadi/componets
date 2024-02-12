import Rout from "./components/Rout";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto flex p-5 w-full">
      <Sidebar></Sidebar>
      <Rout path="/">
        <DropdownPage></DropdownPage>
      </Rout>
      <Rout path="/accordion">
        <AccordionPage></AccordionPage>
      </Rout>
      <Rout path="/buttons">
        <ButtonPage></ButtonPage>
      </Rout>
      <Rout path="/modal">
        <ModalPage></ModalPage>
      </Rout>
    </div>
  );
}

export default App;
