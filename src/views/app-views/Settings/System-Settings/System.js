import { Breadcrumb, Button } from 'antd';
import { Layout } from 'antd';
import { Input,Select } from 'antd';
import { MdOutlineLocalSee } from "react-icons/md";
import { Alert } from 'antd';
import React from 'react';
import '../../../../css/systemSettings.css';
import '../../../../css/upload.css';
import PropTypes from 'prop-types';
import { updateOrganization, login, resetOrganization } from '../../../../redux/actions';
import connect from 'react-redux/es/connect/connect';
import SpinLoad from '../../../../_shared/spin';
import _ from 'lodash';
import organization from '../../../../redux/middleware/app/organization';

const { Option } = Select;

const { Content } = Layout;

const propsTypes = {
  isSubmitting: PropTypes.bool,
  updateOrganization: PropTypes.func.isRequired,
};

const defaultProps = {
  isSubmitting: false,
};
const id =localStorage.getItem('user');



const SystemSettings = (props) => {
 
  const { updateOrganization,resetOrganization, error, isSubmitting} = props;

  const [name, setName] = React.useState('');
  const [vision, setVision] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const [countryName, setCountryName] = React.useState('');

  const inputRef = React.useRef();
    const [media, setMedia] = React.useState(null);
    const [mediaPreview, setMediaPreview] = React.useState(null);

    const formData = new FormData();

    formData.append('name', name);
    formData.append('vision', vision);
    formData.append('street', street);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('country', countryName);
    formData.append('image', media);

    const handleChange = e => {
        const { name,  files } = e.target;
    
        if (name === "media") {
          setMedia(files[0]);
          setMediaPreview(URL.createObjectURL(files[0]));
        }
      }; 

    const onChange=(value)=> {
        setCountryName(value)
      }

      const submit= (e) =>{
        e.preventDefault()
        const values=formData.values()
    
        const payload = {
          ...values,  
          name:  formData.get('name'),
          image:  formData.get('image'),
           vision:  formData.get('vision'),
           street:  formData.get('street'),
          city:  formData.get('city'),
           state:  formData.get('state'),
          country:  formData.get('country'),

        }
        updateOrganization(payload, {id:Number(id)})

        if(!_.isEmpty(organization)) {
          resetOrganization();
        }
           
        
      }
     
     
  return <Content
  className="site-layout-content"
>
    <Breadcrumb style={{ margin: '16px 0' }}>
        <h6 className='breadcumb-title'>System Settings</h6>
        <p className='breadcumb-subtitle'>Organization Profile</p>
        <hr className='header-rule'/>
        {error?<Alert message={error===null?'Login Successful!':error} type={error===null?"success":"error"} showIcon />:''}
  </Breadcrumb>

<div className="complete-systems-container">
 <div className="Upload-container">

 <div>
            <div className="camera-containers">
                <div className="picture-con"><img src={mediaPreview} className='picture' alt=""/></div>
                 <input
                    ref={inputRef}
                    onChange={handleChange}
                    name="media"
                    style={{display:"none"}}
                    type="file"
                    accept="image/*"
                />
                <div className="camera" onClick={() => inputRef.current.click()}><MdOutlineLocalSee className="camera-icon"/> </div>
            </div>    
        </div>


 </div>
 <div className="profile-content">
    <label for="org_name">Organization Name *</label>
     <Input type="text" name='name' className='profile-input' placeholder='Organization Name'  onChange={(e)=> setName(e.target.value)} />
 </div>
</div>
<hr className='profile-header'/>

<div className="organization-vision">
    <h3 className='vision-title'>Organization Vision</h3>
    <p className='vision-subtitle'>Vision</p>
    <Input type="text" name="vision" className='vision-input' placeholder='To be the preferred technology partner by 2025'  onChange={(e)=> setVision(e.target.value)} />
</div>
<hr />
<div className="organization-vision">
    <h3 className='vision-title'>Organization Address</h3>
    <p className='vision-subtitle'>Street</p>
    <Input type="text" name="street" className='vision-input' placeholder='9B Akin-Ogunmade'  onChange={(e)=> setStreet(e.target.value)}/>
    <div className='address-container'>
   <div>
        <p className='vision-subtitle'>City</p>
    <Input type="text" name="city" className='vision-mini-input' placeholder='city'  onChange={(e)=> setCity(e.target.value)} />
    </div>
    <div>
    <p className='vision-subtitle'>State</p>
    <Input type="text" name="state" className='vision-mini-input' placeholder='state' onChange={(e)=> setState(e.target.value)} />
    </div>
    {isSubmitting? <SpinLoad loading={true} />: ''}
    </div>
    <div className='select-input'>
    <p className='vision-subtitle'>Country</p>
  <Select
  className='select-mini'
    showSearch
    name={'country'}
    placeholder="Select a country"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="nigeria">Nigeria</Option>
    <Option value="usa">USA</Option>
    <Option value="gemany">Germany</Option>
  </Select>
    </div>
</div>
<hr className='profile-header' />

<Button className='save-btn' onClick={submit} disabled={isSubmitting}>Save</Button>
</Content>;
};

SystemSettings.propTypes = propsTypes;
SystemSettings.defaultProps = defaultProps;

const stateProps = (state) => ({
    isSubmitting: state.ui.loading.updateOrganization,
    error: state.ui.errors.updateOrganization ,
});

const dispatchProps = {
    updateOrganization,
    login,
    resetOrganization
   
};

export default connect(stateProps, dispatchProps)(SystemSettings);


