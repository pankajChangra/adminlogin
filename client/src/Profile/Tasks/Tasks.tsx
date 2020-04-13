import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "../CustomCheckbox/CustomCheckbox";
import Button from "../CustomButton/CustomButton";

interface IState {
  number?: any
}

export class Tasks extends Component<{},IState>{

  constructor(props: {}){
    super(props);
    this.state = {
      number: 0
    }
  }
  
  handleCheckbox = (event?: any) => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const tasks_title = [
      'Sign contract for "What are conference organizers afraid of?"',
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
      "Create 4 Invisible User Experiences you Never Knew About",
      'Read "Following makes Medium better"',
      "Unfollow 5 enemies from twitter"
    ];
    var tasks = [];
    for (var i = 0; i < tasks_title.length; i++) {
      let {number} = this.state
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
              label=''
              inline=''
            />
          </td>
          <td>{tasks_title[i]}</td>
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
