import React, { Component } from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import "../../styles/core/App.css";
import Root from "../pages/Root";
import rootReducer from "../../reducers/index";
import AccountDragons from "../content/AccountDragons";
import PublicDragons from "../pages/PublicDragons";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

const history = createBrowserHistory();

const AuthRoute = props => {
  if (!store.getState().account.loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const { component, path } = props;

  return <Route path={path} component={component} />;
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/" component={Root} />
            <AuthRoute path="/account-dragons" component={AccountDragons} />
            <AuthRoute path="/public-dragons" component={PublicDragons} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
