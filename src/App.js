import Button from "./components/Button";
import Nav from "./general/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="bg-black h-[50vh]"></div>
      <Button variant="primiary" className="p-[20px] bg-[yellow]">
        dasdsa
      </Button>
    </div>
  );
}

export default App;
