/*
 * @file: Signin.js
 * @description: User Signin
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
import { func } from 'prop-types';
// import { userLogin } from '../actions/user-actions-types';
import TextInput from '../components/TextInput';

class Signin extends Component {
  static propTypes = { userLogin: func.isRequired };

  state = {
    email: '',
    password: '',
  };

  onClick = () => {
    const {
      email, password,
    } = this.state;

    console.log('singin');
    // this.props.userLogin({
    //   email,
    //   password,
    // });
  };

  onChangeHanlder = ({
    target: {
      name, value,
    },
  }) => {
    this.setState({ [name]: value });
  };

  renderHeader = () => (
    <Helmet>
      <title>Signin</title>
    </Helmet>
  );

  render() {
    const {
      email, password,
    } = this.state;

    return (
      <div className="login-container">
        {this.renderHeader()}
        <h1>Please Login to continue</h1>
        <form className="login-form">
          <TextInput name="email" placeholder="E-mail" type="text" value={email} onChangeHandler={this.onChangeHanlder} />
          <TextInput name="password" placeholder="Password" type="password" value={password} onChangeHandler={this.onChangeHanlder} />
          <button className="loginbutton" type="button" onClick={this.onClick}>
            {'SIGN IN'}
          </button>
        </form>
        <a href="/signup">Click here for new users</a>
      </div>
    );
  }
}

// const mapDispatchToProps = { userLogin };

// export default connect(
//   null,
//   mapDispatchToProps
// )(Signin);

export default Signin;
