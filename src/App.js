import Button from "./components/Button";
import Nav from "./general/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Button variant="primiary">test2</Button>
      <div className="bg-black h-[50vh]"></div>
    </div>
  );
}

export default App;
