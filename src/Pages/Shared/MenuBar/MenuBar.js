import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const MenuBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="text-decoration-none" to="/">
              <h1 className="logo">Geo Wild Photography</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/addService" className="nav-link">
                Add Service
              </Link>
              {user?.uid ? (
                <>
                  <Link to="/myReviews" className="nav-link">
                    My Reviews
                  </Link>

                  <Button
                    onClick={userLogOut}
                    className="fw-bold"
                    variant="light"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
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
