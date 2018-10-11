/*
 * @file: Signin.js
 * @description: User Signin
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import BrowserTabHeader from '../../components/BrowserTabHeader';
import { userLogin } from '../../actions/user-actions-types';

class Signin extends Component {
  static propTypes = { userLogin: func.isRequired };

  state = {
    email: '',
    password: '',
  };

  onClick = () => {
    this.props.userLogin();
  };

  onChangeHandler = ({
    target: {
      name, value,
    },
  }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      email, password,
    } = this.state;

    return (
      <div className="login-container">
        <BrowserTabHeader title={'Signin'} />
        <h1>Please Login to continue</h1>
        <form className="login-form">
          <TextInput
            name="email"
            placeholder="E-mail"
            type="text"
            value={email}
            onChangeHandler={this.onChangeHandler}
          />
          <TextInput
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChangeHandler={this.onChangeHandler}
          />
          <button className="loginbutton" type="button" onClick={this.onClick}>
            {'SIGN IN'}
          </button>
        </form>
        <a href="/signup">Click here for new users</a>
      </div>
    );
  }
}

export default connect(
  null,
  { userLogin }
)(Signin);
