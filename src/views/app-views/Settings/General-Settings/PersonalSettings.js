import React from 'react';
import { Breadcrumb } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fetchOrganization } from '../../../../redux/actions';
import connect from 'react-redux/es/connect/connect';
import '../../../../css/personal.css'
import ProfileImage from '../../../../components/Upload/UploadProfile';


const { Content } = Layout;

const propsTypes = {
   isSubmitting: PropTypes.bool,
   fetchOrganization: PropTypes.func.isRequired,
 };
 
 const defaultProps = {
   isSubmitting: false,
 };

const PersonalSettings = (props) => {
   const { fetchOrganization, id, error, isSubmitting} = props;
  
    React.useEffect(() => {
      fetchOrganization()
    }, [])


  return <Content
  className="site-layout-content">
     <Breadcrumb style={{ margin: '16px 0' }}>
        <h6 className='breadcumb-title'>General Settings</h6>
        <div className='general-sub-title'>
        <p className='breadcumb-subtitle '><Link to='/settings/general'>Security</Link></p>
        <p className='breadcumb-subtitle active'><Link to='/settings/general/personal-settings'>Personal Settings</Link></p>
        </div>
        <hr className='header-rule'/>
     </Breadcrumb>

<div className="complete-systems-container">
<div className="Upload-container">
     <ProfileImage/>
 </div>
 <div className="profile-content">
    <h3>John Doe</h3>
    <p>Joedoe@test.com</p>
 </div>
 <div className="profile-status">
     ACTIVE
 </div>
</div>
</Content>
};

PersonalSettings.propTypes = propsTypes;
PersonalSettings.defaultProps = defaultProps;

const stateProps = (state) => ({
    isSubmitting: state.ui.loading.fetchOrganization,
    id:state.app?.user?.data?.user.id,
    error: state.ui.errors.fetchOrganization ,
});

const dispatchProps = {
   fetchOrganization,
};

export default connect(stateProps, dispatchProps)(PersonalSettings);

