import React from 'react';
import './LoginSignUp.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginSignUp = () => {
  return (
    <div className="regular">
        <div className="form-box">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="UserName" required></input>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="Password" placeholder="Password" required></input>
                    <FaLock className="icon"/>
                </div>
                
                <div className="remember">
                    <label><input type="checkbox"></input>Save the username and password</label>
                    <a href="#"> Forget Password</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-form">
                    <p>Don't have a account <a href="#">Click here to register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginSignUp;