import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Card from "../Card/Card";
import { thArray, tdArray } from "../variables/Variables";

export default function TableList(){
    return (
      <div className="content">
        <div className="fluid">
          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                //ctTableFullWidth
                //ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
