import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
          <div className={cx('content')}>{children}</div>
        </div>
        <br />
        <br />
        <div className={cx('footer')}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
