import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Favorite, Home, Login } from './pages';
import { Header } from "./components";

import { authMe } from "./redux/reducers/users-reducer";

import "./styles/app.scss";
import 'antd/dist/antd.css';

function App({authMe}) {

  React.useEffect(() => {
    authMe()
  }, [])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route>
            <Header />
              <div className="app__content">
                <Switch>
                  <Route exact path="/favorites" component={Favorite} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

export default connect(
  mapStateToProps, {authMe}
)(App)
