import React, { Component } from "react";
import { Row, Col, Navbar } from "react-bootstrap";
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
      <React.Fragment>
        <Row>
          <Col md={6}>
            <Navbar className="fluid">
              <Navbar.Brand>
                <a href="#pablo">{this.props.brandText}</a>
              </Navbar.Brand>
              <Navbar.Toggle onClick={this.mobileSidebarToggle} />
            </Navbar>
          </Col>
          <Col md={6}>
            <AdminNavbarLinks />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Header;
