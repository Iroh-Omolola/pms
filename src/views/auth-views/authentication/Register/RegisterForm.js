import React from 'react';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'
import { Form, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import { register } from '../../../../redux/actions';
import connect from 'react-redux/es/connect/connect';
import '../../../../css/auth.css'
import SpinLoad from '../../../../_shared/spin';

const propsTypes = {
  isSubmitting: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const defaultProps = {
  isSubmitting: false,
};


const rules = {
  name:[
    {
      required: true,
      message: 'Please input your Organization name!',
    },
  ],
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}


const RegisterForm = (props) => {
  const { register, isSubmitting } = props;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        register(values)
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
        rules={rules.name}
      >
        <Input placeholder="organization name"  className='input-text'/>
      </Form.Item>
      <Form.Item 
					name="email" 
					label="Email" 
          required={false}
					rules={rules.email}
					hasFeedback
				>
        <Input placeholder="email"  className='input-text'/>
      </Form.Item>
      {isSubmitting? <SpinLoad loading={true} />: ''}
      <Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
          required={false}
					hasFeedback
				>
        <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item 
					name="password_confirmation" 
					label="ConfirmPassword" 
					rules={rules.confirm}
          required={false}
					hasFeedback
				>
			
        <Input.Password  name="confirm" placeholder="password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" disabled={isSubmitting}>
        Create
        </Button>
        <div className='no-account-container'><p>Don’t have an account?</p> <Link to='/login' className='log-sign-up'>Sign in</Link></div>
      </Form.Item>
    </Form>
    
  </div>;
};


RegisterForm.propTypes = propsTypes;
RegisterForm.defaultProps = defaultProps;

const stateProps = (state) => ({
    isSubmitting: state.ui.loading.register,
});

const dispatchProps = {
    register,
};

export default connect(stateProps, dispatchProps)(RegisterForm);

