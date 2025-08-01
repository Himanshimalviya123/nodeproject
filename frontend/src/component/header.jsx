
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header=()=>{
    return(
       <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="insert">insert</Nav.Link>
            <Nav.Link href="update">update</Nav.Link>
             <Nav.Link href="display">display</Nav.Link>
              <Nav.Link href="search">search</Nav.Link>
               <Nav.Link href="contact">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </> 
    )
} 
export default Header;