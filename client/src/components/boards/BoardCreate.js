import React from "react";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";
import BoardForm from "../boards/BoardForm";

class BoardCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createBoard(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Board</h3>
        <BoardForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createBoard }
)(BoardCreate);
