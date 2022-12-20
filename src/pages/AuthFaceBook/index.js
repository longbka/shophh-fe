import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function AuthFacebook() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    axios({
      method: 'GET',
      url: `http://localhost:1337/api/auth/facebook/callback${search}`,
    })
      .then((res) => {
        Cookies.set('jwt', res.data.jwt);
        Cookies.set('user', JSON.stringify(res.data.user));
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return <></>;
}

export default AuthFacebook;
