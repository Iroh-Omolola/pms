import React from 'react';
import AuthSuccessContainer from './AuthSuccessContainer';
import '../../../../css/auth.css'

const AuthSuccess = () => {
  return <div className="auth-container">
    <div className="auth-container-display">
    <div className='auth-success'>
      <AuthSuccessContainer/>  
  </div>
    </div>
  </div>;
};

export default AuthSuccess;
