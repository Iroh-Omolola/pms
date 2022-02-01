import React from 'react';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'
import '../auth.css'
import { Button } from 'antd';

const AuthSuccessContainer = () => {
  
  return <div className='auth-form-container'>
     <div className="success-container">
       <div className="success-sign">
         <img src="/assets/images/success.png" className='success-logo' alt="" srcset="" />
       </div>
     </div>
     <div className="success-container-two">
       <div className="success-text">
         <h3>Awesome!</h3>
         <p>Your organization has been successfully created.</p>
       </div>
      <div className="btn-btn-dashboard">
     <Link to='/dashboard'> <Button className='dashboard-button'>Go to Dashboard</Button></Link>
      </div>
     </div>
  </div>;
};

export default AuthSuccessContainer;
