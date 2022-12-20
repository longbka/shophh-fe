import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import News from '~/pages/News';
import Product from '~/pages/Product';

import config from '~/config';
import About from '~/pages/About';
import Discount from '~/pages/Discount';
import Login from '~/pages/Login';
import Registration from '~/pages/Regisiter';
import AuthFacebook from '~/pages/AuthFaceBook';
import EnterEmail from '~/pages/ForgotPassword/EnterEmail';
import EnterNewPassword from '~/pages/ForgotPassword/EnterPassword';
//Public Routes
const publicRoutes = [
  { path: config.routes.contact, component: Contact },
  { path: config.routes.news, component: News },
  { path: config.routes.productDetail, component: Product },
  { path: config.routes.home, component: Home },
  { path: config.routes.discount, component: Discount },
  { path: config.routes.about, component: About },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.register, component: Registration, layout: null },
  { path: config.routes.authfacebook, component: AuthFacebook, layout: null },
  { path: config.routes.enterEmail, component: EnterEmail, layout: null },
  { path: config.routes.enterPassword, component: EnterNewPassword, layout: null },

];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
