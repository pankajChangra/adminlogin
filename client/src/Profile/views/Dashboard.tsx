import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "../Card/Card";
import { Tasks } from "../Tasks/Tasks";
import TableList from "./TableList"

class Dashboard extends Component {
  createLegend(json?: any) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <TableList />
        <div className="fluid">
          <Row>
            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
