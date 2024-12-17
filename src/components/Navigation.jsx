import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import "../sass/style.scss"
function Navigation() {
  return (
    <Navbar expand="lg"  style={{ backgroundColor: '#ecfdff' }} className="navbar">
      <Container>
        {/* Sol Taraf */}
        <Navbar.Brand>
          <Link to="/">
            <img src="https://themewagon.github.io/aranoz/img/logo.png" alt="logo"  />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Orta Kısım */}
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/shop" className="nav-link">Shop</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>

          {/* Sağ Taraf */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              <i className="fa-regular fa-heart "></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              <i className="fa-solid fa-cart-shopping "></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
