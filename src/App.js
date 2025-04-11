import Button from "./components/Button";
import Nav from "./general/Nav";
import Typography from "./Typography";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="bg-black h-[50vh]"></div>
      <Button variant="primiary" className="p-[20px] bg-[yellow]">
        dasdsa
      </Button>

      <Typography.Title>h1-title: Empowering Your</Typography.Title>
      <Typography.P>Paragraph: Empowering Your</Typography.P>
      <Typography.SubTitle>
        h2-subtitle: The ABC's of Immigration
      </Typography.SubTitle>
      <Typography.PSm>Sm Paragraph: Empowering Your</Typography.PSm>
    </div>
  );
}

export default App;
