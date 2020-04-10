import React, { Component } from "react";

interface IProps {
  number: any 
  label: any 
  option: any
  name? : any
}

class CustomRadio extends Component<IProps>{
  constructor(props: IProps){
    super(props);
  }
  render() {
    const { number, label, option, name, ...rest } = this.props;

    return (
      <div className="radio">
        <input id={number} name={name} type="radio" value={option} {...rest} />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  }
}

export default CustomRadio;
