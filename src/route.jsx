import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 바뀔 것들을 switch아래에다가 작성한다 */}
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
