import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import AdminNavbarLinks from "./AdminNavbarLinks";

interface IProps {
  brandText ? : any
}

interface IState {
  sidebarExists?: boolean
}

class Header extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle = (e:any) => {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      //this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar className="fluid">
        <Navbar>
          <Navbar.Brand>
            <a href="#pablo">{this.props.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar>
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
