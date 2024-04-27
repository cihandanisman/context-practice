import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiWeatherStormy } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MyNavbar() {
  const {handleLogOut} = useContext(AuthContext)

  return (
    <>
      <Navbar  bg="secondary" className="shadow d-flex flex-flex-wrap justify-content-between align-item-center p-3" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Weather Underground <TiWeatherStormy />
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link >Contact</Nav.Link>
            <Nav.Link >More</Nav.Link>
          </Nav>
          <div className="text-white">
            <IoIosLogOut onClick={handleLogOut} size={"25"}/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
