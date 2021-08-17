import React, { Component } from "react";
import "./Login.scss";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="loginContainer">
        <h1 className="title" aria-label="Welcome to Westagram">
          Westagram
        </h1>
        <form className="userInfo">
          <input type="email" className="userID" placeholder="전화번호, 사용자 이름 또는 이메일" aria-label="Write account ID" />
          <input type="password" className="userPW" placeholder="비밀번호" aria-label="Write accout password" />
          <button type="button" className="loginBtn" aria-label="login" onClick={this.goToMain}>
            로그인
          </button>
        </form>
        <div className="helpLink" aria-label="help desk">
          <Link to="">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
