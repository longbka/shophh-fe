import { Col, Row, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
const cx = classNames.bind(styles);
const ResetPassword = () => {
  const [isSentEmail, setIsSentEmail] = useState(false);
  const onFinish = async (values) => {
    setIsSentEmail(true);
    const { email } = { ...values };
    axios
      .post('http://localhost:1337/api/auth/forgot-password', {
        email: `${email}`,
      })
      .then((response) => {
        console.log('Your user received an email');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
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
        <h2>Quên mật khẩu</h2>
        <Form.Item
          label="Nhập email đã đăng ký"
          rules={[
            { required: true, message: '' },
            {
              type: 'email',
              message: 'Vui lòng nhập đúng định dạng email',
            },
          ]}
          name="email"
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={cx('btn-submit-email')}>
            Submit
          </Button>
        </Form.Item>
        {isSentEmail && <p style={{ color: 'red' }}>Link đổi mật khẩu đã được gửi đến mail của bạn</p>}
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Quay lại trang đăng nhập
        </Link>
      </Form>
    </div>
  );
};

export default ResetPassword;
