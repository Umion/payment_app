import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown } from "react-bootstrap";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search.svg";
import notifyIcon from "../../assets/images/notify.svg";
import userIcon from "../../assets/images/user.svg";
import { NavLink } from "../../types/navbarTypes";

type NavbarProps = {
  navigation: NavLink[];
};

function TheNavbar(props: NavbarProps) {
  return (
    <>
      <Navbar fixed="top" bg="white" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoIcon}
              className="d-inline-block align-top logo"
              alt="Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse role="navigation">
            <Nav className="me-auto">
              {props.navigation.map((n) => {
                if (n.href) {
                  return (
                    <Nav.Link key={n.title} href={n.href}>
                      {n.title}
                    </Nav.Link>
                  );
                }
                if (n.children) {
                  return (
                    <NavDropdown
                      title={n.title}
                      key={n.title}
                      id="navbarScrollingDropdown">
                      {n.children.map((c) => {
                        return (
                          <NavDropdown.Item key={c.title} href={c.href}>
                            {c.title}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                }
              })}
            </Nav>
            <Nav className="d-none d-lg-flex align-items-center">
              <NavDropdown title="EN" className="me-1">
                <NavDropdown.Item>UA</NavDropdown.Item>
                <NavDropdown.Item>PL</NavDropdown.Item>
              </NavDropdown>
              <img role="button" src={searchIcon} className="menu__btn" />
              <img
                role="button"
                className="ms-2 pe-auto menu__btn"
                src={notifyIcon}
              />
              <img
                role="button"
                className="ms-2 pe-auto menu__btn"
                src={userIcon}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TheNavbar;
