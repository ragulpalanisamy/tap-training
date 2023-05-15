import {Navbar,Nav, Container} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">Movies App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add-movie">Add Movie</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
  )
}

export default Header;
