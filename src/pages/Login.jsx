import React from 'react';

import { LoginForm } from '../components';

import logo from '../assests/sibdev-logo.svg';

import { compose } from 'redux';
import { getUser } from '../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Login = ({getUser, ...props}) => {

  const onFinish = (values) => {
    getUser(values.login, values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(props.isAuth) {
    return <Redirect to="/" />
  }

  return (
    <div className="login_page">
      <div className="login_page__form_wrap">
        <div className="login_page__form_wrap__logo">
          <img src={logo} alt="" />
        </div>
        <div className="login_page__form_wrap__title bold text-18">
          Вход
        </div>
        <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

export default compose(
  connect(mapStateToProps, {getUser})
)(Login)
