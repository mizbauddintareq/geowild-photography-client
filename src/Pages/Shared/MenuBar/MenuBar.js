import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const MenuBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {user?.uid ? (
                <>
                  <button onClick={userLogOut}>
                    <Link className="nav-link">logout</Link>
                  </button>
                </>
              ) : (
                <Link to="/login" className="nav-link">
                  login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
