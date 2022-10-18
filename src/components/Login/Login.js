import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-tittle' > LOGIN</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />

                </div>
                <button className='Submit-login' type="submit">Login</button>

            </form>
            <p> New to ema jhon <Link to='/signup' > Create a new account </Link></p>
        </div>
    );
};

export default Login;