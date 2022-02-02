import { Breadcrumb, Button } from 'antd';
import { Layout } from 'antd';
import { Input,Select } from 'antd';
import React from 'react';
import '../../../../css/systemSettings.css'
import ProfileImage from '../../../../components/Upload/UploadProfile';

const { Option } = Select;

const { Content } = Layout;

const SystemSettings = () => {

    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }
  return <Content
  className="site-layout-content"
>
    <Breadcrumb style={{ margin: '16px 0' }}>
        <h6 className='breadcumb-title'>System Settings</h6>
        <p className='breadcumb-subtitle'>Organization Profile</p>
        <hr className='header-rule'/>
  </Breadcrumb>

<div className="complete-systems-container">
 <div className="Upload-container">
     <ProfileImage/>
 </div>
 <div className="profile-content">
    <label for="org_name">Organization Name *</label>
     <Input type="text" name="cheese" className='profile-input' placeholder='Organization Name' />
 </div>
</div>
<hr className='profile-header'/>
<div className="organization-vision">
    <h3 className='vision-title'>Organization Vision</h3>
    <p className='vision-subtitle'>Vision</p>
    <Input type="text" name="cheese" className='vision-input' placeholder='To be the preferred technology partner by 2025' />
</div>
<hr />
<div className="organization-vision">
    <h3 className='vision-title'>Organization Address</h3>
    <p className='vision-subtitle'>Street</p>
    <Input type="text" name="cheese" className='vision-input' placeholder='9B Akin-Ogunmade' />
    <div className='address-container'>
   <div>
        <p className='vision-subtitle'>City</p>
    <Input type="text" name="cheese" className='vision-mini-input' placeholder='city' /></div>
    <div>
    <p className='vision-subtitle'>State</p>
    <Input type="text" name="cheese" className='vision-mini-input' placeholder='state' />
    </div>
    </div>
   
    
    <div className='select-input'>
    <p className='vision-subtitle'>Country</p>
  <Select
  className='select-mini'
    showSearch
    placeholder="Select a country"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Nigeria</Option>
  </Select>
    </div>
</div>
<hr className='profile-header' />

<Button className='save-btn'>Save</Button>
</Content>;
};

export default SystemSettings;
