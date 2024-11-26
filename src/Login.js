import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <h1 className="bem-vindo">Bem-vindo!</h1>
      </div>
      <div className="login-form">
        <h1>LOGIN</h1>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Senha" className="input-field" />
          <div className="options">
            <a href="#forgot">Esqueceu a Senha?</a>
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p>
          Não Tem Uma Conta? <a href="#signup">Cadastre-se</a>
        </p>
        <div className="social-login">
          <p>Logar Com</p>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            </a>
            <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className="icon google" />
            </a>
            <a href="https://appleid.apple.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faApple} className="icon apple" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
