import React from 'react';
import connect from 'react-redux/es/connect/connect';
import LoginForm from './LoginForm';
import '../../../../css/auth.css'
import { Alert } from 'antd';

const Login = ({error}) => {
  return <div className="auth-container">
    <div className="auth-container-display">
    <div className='auth'>
    <div className="form-logo">
      <img src="/assets/images/pms-lg.png" className='logo' alt="" srcset="" />
    </div>
    <div className="logo-form-container">
      <p className='auth-text'>Sign in to your account</p>
      {error?<Alert message={error===null?'Login Successful!':error} type={error===null?"success":"error"} showIcon />:''}
      <LoginForm/>
    </div>
      
  </div>
    </div>
  </div>;
};

const stateProps = (state) => ({
  error: state.ui.errors.login ,
});


export default connect(stateProps,{})(Login);

