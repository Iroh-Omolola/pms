import { Breadcrumb, Button } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import '../../../css/profile.css'
import { FaArrowRight} from "react-icons/fa";


const { Content } = Layout;

const CompleteProfile = () => {
    
  return <Content
  className="site-layout-content"
>
    <Breadcrumb style={{ margin: '16px 0' }}>
  </Breadcrumb>
<div className="complete-profile-container">
<div className="complete-profile-icon-container">
  <img src="/assets/images/bulb.png" alt="" srcset="" />
</div>
<div className="complete-profile-content">
  <p>PMS is very simple, Zojatech Ltd. Complete your organization profile.</p>
  <Button><Link to='/settings/system'>Complete Profile  <FaArrowRight className='profile-arrow-icon'/></Link></Button>
</div>
</div>
</Content>;
};

export default CompleteProfile;
