import React from "react";
import { Nav} from "react-bootstrap";

export interface NavItemProps extends React.Props<NavItemClass> {
  eventKey?: any;
  href?: any
}
export interface NavItems extends React.ReactElement<NavItemProps> { }
export interface NavItemClass extends React.ComponentClass<NavItemProps> { }
export var NavItems: NavItemClass;

export default function AdminNavbarLinks(){
  return (
    <div>
      <Nav className="pullRight">
        <NavItems eventKey={1} href="#">
          Account
        </NavItems>
        <NavItems eventKey={3} href="#">
          Log out
        </NavItems>
      </Nav>
    </div>
  )
}