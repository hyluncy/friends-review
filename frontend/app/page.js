import 'react-tooltip/dist/react-tooltip.css'; 
import Container from 'react-bootstrap/Container'; 

export default function Home() {
  // TODO: Conditional rendering of the Tutorial component 
  // if signed up/logged in, user's custom feed will show up, otherwise, 
  // the tutorial will show up on how to use the site
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}
