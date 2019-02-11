import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoards } from "../../actions";

class BoardList extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  renderCreate = () => {
    if (this.props.userSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/boards/new" className="ui button primary">
            Create Board
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.boards.map(board => {
      return (
        <div className="item" key={board.id}>
          {this.renderAdmin(board)}
          <div className="content">
            {board.title}
            <div className="description">{board.description}</div>
          </div>
        </div>
      );
    });
  };

  renderAdmin = board => {
    if (board.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/boards/edit/${board.id}`} className="ui button primary">
            EDIT
          </Link>
          <Link to={`boards/delete/${board.id}`} className="ui button negative">
            DELETE
          </Link>
        </div>
      );
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Boards</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: Object.values(state.boards),
    currentUserId: state.auth.userId,
    userSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBoards }
)(BoardList);
