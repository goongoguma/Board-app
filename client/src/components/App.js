import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import BoardList from "./boards/BoardList";
import BoardCreate from "./boards/BoardCreate";
import BoardDelete from "./boards/BoardDelete";
import BoardEdit from "./boards/BoardEdit";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" exact component={BoardList} />
        <Route path="/boards/new" component={BoardCreate} />
        <Route path="/boards/edit/:id" component={BoardEdit} />
        <Route path="/boards/delete/:id" component={BoardDelete} />
      </div>
    </Router>
  );
};

export default App;
