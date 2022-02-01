import React from 'react';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'
import { Form, Input, Button} from 'antd';
import '../auth.css'

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

  return <div className='auth-form-container'>
      <Form
      name="normal_login"
      className="auth-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <Form.Item
        name="name"
        label="Organization Name"
        required={false}
        rules={[
          {
            required: true,
            message: 'Please input your Organization name!',
          },
        ]}
      >
        <Input placeholder="organization name"  className='input-text'/>
      </Form.Item>
      <Form.Item
        name="emal"
        label="Email"
        required={false}
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input placeholder="email"  className='input-text'/>
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        required={false}
       
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
       
        placeholder="password" />
   <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        required={false}
        rules={[
          {
            required: true,
            message: 'Please confirm your Password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          })
        ]}
      >
        <Input.Password
       
        placeholder="password" />
      </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Create
        </Button>
        <div className='no-account-container'><p>Don’t have an account?</p> <Link to='/login' className='log-sign-up'>Sign in</Link></div>
      </Form.Item>
    </Form>
  </div>;
};

export default RegisterForm;
