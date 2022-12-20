import { Form, Input, Button } from 'antd';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles);
const EnterNewPassword = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const onFinish = async (values) => {
    let token = searchParams.get('code');
    const { password, confirmPassword } = { ...values };
    axios
      .post('http://localhost:1337/api/auth/reset-password', {
        code: `${token}`, // code contained in the reset link of step 3.
        password: `${password}`,
        passwordConfirmation: `${confirmPassword}`,
      })
      .then((response) => {
        toast.success('Bạn đã đổi thành công mật khẩu');
        navigate('/login');
      })
      .catch((error) => {
        toast.error('Đã xảy ra lỗi');
      });
  };
  const onFinishFailed = (err) => {
    console.log(err);
  };

  return (
    <div className={cx('reset-password-wrapper')}>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className={cx('form-forgot-password')}
      >
        <h2>Đổi mật khẩu</h2>
        <Form.Item
          label="Nhập mật khẩu mới"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu',
            },
            {
              min: 6,
              message: 'Mật khẩu phải lớn hơn 6 ký tự',
            },
          ]}
          name="password"
        >
          <Input.Password className={cx('input-password')} />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu phải trùng khớp'));
              },
            }),
          ]}
        >
          <Input.Password className={cx('input-password')} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={cx('btn-submit-email')}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EnterNewPassword;
