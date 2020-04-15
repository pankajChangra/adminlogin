import React, { Component } from "react";
import {Navbar, Nav} from "react-bootstrap";
import { useHistory } from "react-router-dom";

class AdminNavbarLinks extends Component {
  
  handleLogout = () => {
    const history = useHistory();
    localStorage.removeItem('admin');
    history.push("/");
  }
  render() {
    return (
      <Nav className="outer-navbar pull-right">
        <Navbar.Brand>
          <span className="logout-pointer" onClick={()=>this.handleLogout()}>Logut</span>
        </Navbar.Brand>
      </Nav>
    );
  }
}

export default AdminNavbarLinks;
