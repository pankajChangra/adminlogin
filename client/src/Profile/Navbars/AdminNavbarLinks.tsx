import React, { Component } from "react";
import {Navbar, Nav} from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth.act";

interface IProps {
  logout?: any
  href?: string
}

class AdminNavbarLinks extends Component<IProps>{
  constructor(props: IProps){
    super(props)
  }

  handleLogout = () => {
    this.props.logout();
    window.location.href="/"
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

const mapDispatchToProps = (dispatch:any) => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(null,
  mapDispatchToProps
  )(AdminNavbarLinks);

