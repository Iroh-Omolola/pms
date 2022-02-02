import React from 'react';
import LoginForm from './LoginForm';
import '../../../../css/auth.css'

const Login = () => {
  return <div className="auth-container">
    <div className="auth-container-display">
    <div className='auth'>
    <div className="form-logo">
      <img src="/assets/images/pms-lg.png" className='logo' alt="" srcset="" />
    </div>
    <div className="logo-form-container">
      <p className='auth-text'>Sign in to your account</p>
      <LoginForm/>
    </div>
      
  </div>
    </div>
  </div>;
};

export default Login;
