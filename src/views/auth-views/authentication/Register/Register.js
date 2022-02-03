import React from 'react';
import RegisterForm from './RegisterForm';
import connect from 'react-redux/es/connect/connect';
import { Alert } from 'antd';
import '../../../../css/auth.css'



const Register = ({error}) => {
  
  return <div className="auth-container">
    <div className="auth-container-display">
    <div className='auth'>
    <div className="form-logo">
      <img src="/assets/images/pms-lg.png" className='logo' alt="" srcset="" />
    </div>
    <div className="logo-form-container">
      <p className='auth-text'>Create your organization</p>
      {error?<Alert message={error===null?'Registration Successful!':error} type={error===null?"success":"error"} showIcon />:''}
      <RegisterForm/>
    </div>
      
  </div>
    </div>
  </div>;
};


const stateProps = (state) => ({
    error: state.ui.errors.register ,
});


export default connect(stateProps,{})(Register);

