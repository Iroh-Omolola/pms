import React from 'react';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { login } from '../../../../redux/actions';
import connect from 'react-redux/es/connect/connect';
import '../../../../css/auth.css'
import SpinLoad from '../../../../_shared/spin';


const propsTypes = {
  isSubmitting: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const defaultProps = {
  isSubmitting: false,
};

const LoginForm = (props) => {

  const { login, isSubmitting} = props;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        login(values)
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
        name="email"
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
      {isSubmitting? <SpinLoad loading={true} />: ''}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to='/forgot-password' >Forgot password?</Link>
       
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" disabled={isSubmitting}>
        Sign in
        </Button>
        <div className='no-account-container'><p>Don’t have an account?</p> <Link to='/register' className='log-sign-up'>Sign up</Link></div>
      </Form.Item>
    </Form>
  </div>;
};

LoginForm.propTypes = propsTypes;
LoginForm.defaultProps = defaultProps;

const stateProps = (state) => ({
    isSubmitting: state.ui.loading.login,
});

const dispatchProps = {
    login,
};

export default connect(stateProps, dispatchProps)(LoginForm);

