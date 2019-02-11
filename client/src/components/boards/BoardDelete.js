import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchBoard, deleteBoard } from "../../actions";

class BoardDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchBoard(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteBoard(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent() {
    if (!this.props.board) {
      return "Are you sure you want to delete this board?";
    }
    return `Are you sure you want to delete the stream with title : ${
      this.props.board.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Modal"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    board: state.boards[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchBoard, deleteBoard }
)(BoardDelete);
