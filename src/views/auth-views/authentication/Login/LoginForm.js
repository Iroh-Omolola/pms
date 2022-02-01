import React from 'react';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import '../auth.css'

const LoginForm = () => {
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
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to='/forgot-password' >Forgot password?</Link>
       
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign in
        </Button>
        <div className='no-account-container'><p>Don’t have an account?</p> <Link to='/register' className='log-sign-up'>Sign up</Link></div>
      </Form.Item>
    </Form>
  </div>;
};

export default LoginForm;
