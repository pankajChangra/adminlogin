import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks";
import logo from "../../assets/img/reactlogo.png";
import * as actions from  "../../store/actions/user.act"
import { connect } from "react-redux";

interface IProps {
  location?: any
  image?: any
  color?: any
  hasImage? : any
  routes? : any
  userDetailSignup?: any
}

interface IState {
  width? : any
}

class Sidebar extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  
  activeRoute = (routeName?: any) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  }
  
  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  
  handleClick = (event:any,prop: any) => {
    event?.preventDefault()
    if(prop.userDetail === 'userdeatil') {
      this.props.userDetailSignup();
    }
  }

  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="/"
            className="simple-text logo-normal"
          >
            Admin Dashboard
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop: any, key: number) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <span onClick={(e)=>this.handleClick(e,prop)}>{prop.name}</span>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    userDetailSignup: () => dispatch(actions.userDetailSignup())
  };
};

export default connect(
  null,
  mapDispatchToProps
  )(Sidebar);
