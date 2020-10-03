import React from "react";

import "./styles.css";

import logo from "../../assets/logo.png";

const Register = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="register-wrapper">
            <div className="presentation-wrapper">
              <img src={logo} alt="logo" className="logo-presentation" />
              <h1>Faça seu register no DevHelper!</h1>
            </div>
            <div className="form-wrapper">
              <form action="javascript:void(0)">
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    id="email"
                    aria-label="email"
                    placeholder="Nome de usuário ou email"
                  />
                  <input
                    name="password"
                    type="password"
                    id="password"
                    aria-label="password"
                    placeholder="Senha"
                  />
                  <input
                    name="confirm-password"
                    type="password"
                    id="confirm-password"
                    aria-label="password"
                    placeholder="Confirme senha"
                  />
                  <button type="submit" class="submit-btn">
                    Cadastrar-se
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

export default Register;
