import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button primary rounded>
        Primary
      </Button>
      <Button secondary outline rounded>
        Secondary
      </Button>
      <Button success outline>
        Success
      </Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </div>
  );
}

export default App;
