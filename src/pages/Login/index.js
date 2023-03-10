import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import axios from '~/setup/instance';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { refreshToken } from '~/utils/jwtToken';
import { Divider, Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: '/api/auth/local',
        data: {
          identifier,
          password,
        },
        withCredentials: true,
      });
      if (res) {
        console.log(res);
        Cookies.set('jwt', res.jwt);
        Cookies.set('user', JSON.stringify(res.user));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRefreshToken = () => {
    try {
      refreshToken().then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginFbBtn = () => {
    window.location.assign('http://localhost:1337/api/connect/facebook');
  };
  useEffect(() => {
    if (Cookies.get('jwt') && Cookies.get('user')) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <div className={cx('container')}>
        <div id={cx('bg')}></div>

        <form>
          <div className={cx('form-field')}>
            <input
              type="text"
              placeholder="Email / Username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className={cx('form-field')}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={cx('form-field')}>
            <button className={cx('btn')} type="button" onClick={handleSubmit}>
              ????ng nh???p
            </button>
          </div>
          <div className={cx("forgot-password-wrapper")}>
            <Link to="/enter-email" className={cx('forgot-password-btn')}>Qu??n m???t kh???u?</Link>
          </div>
          <Divider style={{ color: 'var(--gray)' }}>Ho???c</Divider>

          <div className={cx('fb-login-wrapper')}>
            <Button className={cx('fb-login-btn')} size="large" onClick={handleLoginFbBtn}>
              <Space>
                <FontAwesomeIcon icon={faFacebookF} />
                ????ng nh???p b???ng Facebook
              </Space>
            </Button>
          </div>
          <br />
          <div className={cx('register-btn')}>
            <Link to="/register">Ch??a c?? t??i kho???n, ????ng k?? ngay</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
