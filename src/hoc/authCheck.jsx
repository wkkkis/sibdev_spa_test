import React from "react";

import {connect} from "react-redux";
import { Redirect } from 'react-router';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.user.isAuth
});

export function withAuthRedirect(Component) {
  const RedirectComponent = (props) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to="/login" />

    return <Component  {...restProps}/>
  }

  let ConnectedAuthRedirectComponent = connect(
    mapStateToPropsForRedirect
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent
}
