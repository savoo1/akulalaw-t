import Button from "./components/Button";
import Link from "./components/Link";
import List from "./components/List";
import List2 from "./components/List2-link";
import Nav from "./general/Nav";
import Typography from "./Typography";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="bg-black h-[50vh]"></div>
      <Button variant="primiary" className="">
        About Our Team
      </Button>
      <List variant="primiary">English</List>
      <List variant="primiary">Chinese</List>
      <List2 variant="primary"> Link test</List2>
      <Link variant="primary">Ovo je link test</Link>

      <Typography.Title>h1-title: Empowering Your</Typography.Title>
      <Typography.P>Paragraph: Empowering Your</Typography.P>
      <Typography.SubTitle>h2-subtitle: The ABC's of Immigration</Typography.SubTitle>
      <Typography.PSm>Sm Paragraph: Empowering Your</Typography.PSm>
    </div>
  );
}

export default App;
