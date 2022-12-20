import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import location from '~/assets/icons/location.svg';
import phone from '~/assets/icons/phone.svg';
import facebook from '~/assets/icons/facebook.svg';

const cx = classNames.bind(styles);
function Iframe() {
  return (
    <div id="map">
      <iframe
        title="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.04423301971008!2d106.28910600593241!3d18.085080169593375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3138899dd510660b%3A0xf42759989f3ab48d!2zVHLDoCBz4buvYSDEg24gduG6t3QgS2jDoW5oIEjDsmE!5e0!3m2!1svi!2s!4v1669656817944!5m2!1svi!2s"
        width="300"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
function Footer() {
  return (
    <>
      <div className={cx('main-footer')}>
        <div className={cx('container')}>
          <div className={cx('row', 'gx-5')}>
            {/* Column 1 */}
            <div className="col-md-4 col-sm-6">
              <h5 className={cx('title-footer')}>CỬA HÀNG HOÀNG HOÀI</h5>
              <ul className={cx('list-unstyled', 'content-footer')}>
                <li>
                  <img src={location} width={'8%'} className={cx('img-contact')} alt="no-img" />
                  Đường Bích Châu, xã Kỳ Châu, huyện Kỳ Anh, tỉnh Hà Tĩnh
                </li>
                <li>
                  <img src={phone} width={'8%'} className={cx('img-contact')} alt="no-img" />
                  <a href="tel:0912068446" style={{ color: '#fff' }}>
                    0941094428
                  </a>
                </li>
                <li>
                  <img src={facebook} width={'8%'} className={cx('img-contact')} alt="no-img" />
                  <a href="https://www.facebook.com/thuhoai.hoang.3726" style={{ color: '#fff' }}>
                    Hoàng Hoài
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-4 col-sm-6">
              <h5 className={cx('title-footer')}>CHÍNH SÁCH CỬA HÀNG</h5>
              <ul className={cx('list-unstyled', 'content-footer')}>
                <li>Chính sách giao hàng</li>
                <li>Chính sách đổi trả</li>
                <li>Phản hồi khách hàng</li>
                <li>Hướng dẫn thanh toán</li>
              </ul>
            </div>
            {/* Column 3 */}
            {/* Column 4 */}
            <div className="col-md-4 col-sm-6">
              <Iframe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
