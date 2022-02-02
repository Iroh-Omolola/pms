import React from 'react';
import RegisterForm from './RegisterForm';
import '../../../../css/auth.css'

const Register = () => {
  return <div className="auth-container">
    <div className="auth-container-display">
    <div className='auth'>
    <div className="form-logo">
      <img src="/assets/images/pms-lg.png" className='logo' alt="" srcset="" />
    </div>
    <div className="logo-form-container">
      <p className='auth-text'>Create your organization</p>
      <RegisterForm/>
    </div>
      
  </div>
    </div>
  </div>;
};

export default Register;
