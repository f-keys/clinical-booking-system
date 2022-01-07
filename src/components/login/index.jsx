import React, { Component } from "react";
import { Link } from "react-router-dom";

function Login(params) {
  return (
    <>
      {/* Content */}
      <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div className="account-box">
              <form className="form-signin" action="#">
                <div className="account-title">
                  <h3>Login</h3>
                </div>
                <div className="form-group">
                  <label>Username or Email</label>
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    // value={this.state.email_address}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    // value={this.state.password}
                  />
                </div>
                <div className="form-group text-right">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Login
                  </button>
                </div>
                <div className="text-center register-link">
                  Don’t have an account?&nbsp;
                  <Link to="/register">Register Now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Content /*/}
    </>
  );
}

export default Login;
