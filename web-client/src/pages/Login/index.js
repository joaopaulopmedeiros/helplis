import React from "react";

import "./styles.css";

import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="login-wrapper">
            <div className="presentation-wrapper">
              <img src={logo} alt="logo" className="logo-presentation" />
              <h1>Faça seu login no DevHelper!</h1>
            </div>
            <div className="form-wrapper">
              <form action="javascript:void(0)">
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    id="email"
                    aria-label="email"
                    placeholder="Username"
                  />
                  <input
                    name="password"
                    type="password"
                    id="password"
                    aria-label="password"
                    placeholder="Password"
                  />
                  <div class="register-link-wrapper">
                    <a href="javascript:void(0)">Ainda não possui uma conta?</a>
                  </div>
                  <button type="submit" class="submit-btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
