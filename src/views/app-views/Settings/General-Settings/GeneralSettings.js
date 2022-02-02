import { Breadcrumb, Button } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import React from 'react';
import '../../../../css/generalSettings.css'


const { Content } = Layout;

const GeneralSettings = () => {


  return <Content
  className="site-layout-content"
>
    <Breadcrumb style={{ margin: '16px 0' }}>
        <h6 className='breadcumb-title'>General Settings</h6>
        <div className='general-sub-title'>
        <p className='breadcumb-subtitle active'><Link to='/settings/general'>Security</Link></p>
        <p className='breadcumb-subtitle'><Link to='/settings/general/personal-settings'>Personal Settings</Link></p>
        </div>
        <hr className='header-rule'/>
  </Breadcrumb>

<div className="complete-general-container">
    <h3 className='breadcumb-title password-title-h3'>Change Password</h3>
    <div className="change-password">
    <p className='vision-subtitle mini-password'>Current Password</p>
    <Input.Password name="currentPassword" className='vision-mini-input password' placeholder='Current Password' />
    </div>
    <div className="new-password">
    <p className='vision-subtitle mini-password'>New Password</p>
    <Input.Password name="newPassword" className='vision-mini-input password' placeholder='New Password' />
    </div>
    <div className="confirm-password">
    <p className='vision-subtitle mini-password'>Confirm New Password</p>
    <Input.Password name="confirmPassword" className='vision-mini-input password' placeholder='Confirm Password' />
    </div>
    <div className='action-btn'>
    <Button className='update-btn'>Update</Button>
    <Button className='cancel-btn'>Cancel</Button>
    </div>
 </div>

</Content>;
};

export default GeneralSettings;
