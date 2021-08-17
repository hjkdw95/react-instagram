import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <h1 className="title" aria-label="Welcome to Westagram">
          Westagram
        </h1>
        <form className="userInfo">
          <input type="email" className="userID" placeholder="전화번호, 사용자 이름 또는 이메일" aria-label="Write account ID" />
          <input type="password" className="userPW" placeholder="비밀번호" aria-label="Write accout password" />
          <button type="button" className="loginBtn" aria-label="login">
            <a href="./main.html">로그인</a>
          </button>
        </form>
        <div className="helpLink" aria-label="help desk">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}
