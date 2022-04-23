import React from "react";
import "./LoginSwape.css";

const LoginSwape = () => {
  const signUpButtonClick = () => {
    const container = document.querySelector(".container-login");
    container?.classList.add("sign-up-mode");
  };
  const signInButtonClick = () => {
    const container = document.querySelector(".container-login");
    container?.classList.remove("sign-up-mode");
  };

  return (
    <div className="container-login-custom">
      <div className="container-login">
        <div className="forms-container">
          <div className="signin-signup">
            {/* Sign IN */}
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            {/* Sign UP */}
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <select name="role" id="select-role">
                  <option>Please select a role</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="VIEWER">VIEWER</option>
                  <option value="STAFF">STAFF</option>
                </select>
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content-login">
              <h3>New here ?</h3>
              <p>Please create an account to have acces to the application</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={signUpButtonClick}
              >
                Sign up
              </button>
            </div>
            <img src="" className="image imagesign-up" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content-login">
              <h3>One of us ?</h3>
              <p>You already have register an account please login</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={signInButtonClick}
              >
                Sign in
              </button>
            </div>
            <img src="" className="image imagesign-in" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSwape;
