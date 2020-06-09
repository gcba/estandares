import React from "react"
import { navigate } from "gatsby"
import { Navbar, Badge } from "react-bootstrap";
import Sidebar from "./sidebar";

interface HeaderProps {
  title: string;
  current: string;
}

const Header = (props: HeaderProps) =>
  <Navbar bg="light" expand="lg">
    <div className="container-xl">
      <Navbar.Brand onClick={() => navigate("/")}>{props.title}</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      <Badge variant="warning">Contenido en desarrollo</Badge>
    </div>
  </Navbar>;

export default Header
