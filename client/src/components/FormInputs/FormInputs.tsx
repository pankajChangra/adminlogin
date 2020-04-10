import React, { Component } from "react";
import { FormGroup, FormControl, Row } from "react-bootstrap";

interface IProps {
  ncols?: any 
  properties? : any
  label?: any
  props?: any
}

const FieldGroup: React.FC<IProps> = ({ label,props }) => {
  return (
    <FormGroup>
      <label>{label}</label>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class FormInputs extends Component<IProps>{
  constructor(props: IProps){
    super(props)
  }
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
