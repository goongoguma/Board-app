import React from "react";
import { connect } from "react-redux";
import { fetchBoard, editBoard } from "../../actions";
import _ from "lodash";
import BoardForm from "./BoardForm";

class BoardEdit extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.id);
  }

  onSubmit = formVal => {
    console.log(this.props.match.params.id);
    this.props.editBoard(this.props.match.params.id, formVal);
  };

  render() {
    console.log(this.props);
    if (!this.props.board) {
      return <div>LOADING...</div>;
    }
    return (
      <div>
        <h3>Edit a Board</h3>
        <BoardForm
          initialValues={_.pick(this.props.board, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchBoard, editBoard }
)(BoardEdit);
