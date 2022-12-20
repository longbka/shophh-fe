import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import Comment from '~/component/SocialPlugin/Comment';
const cx = classNames.bind(styles);
function Product() {
  const location = useLocation();
  let product = location.state.product;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Row className={cx('mt-4', 'wrapper')}>
        <Col lg={9} md={12} sm={12}>
          <Row>
            <Col lg={6} md={5} sm={12}>
              <Image
                src={process.env.REACT_APP_SERVER_URL + product.thumnail.data.attributes.url}
                width="80%"
                height={'80%'}
              />
            </Col>
            <Col lg={6} md={7} sm={12}>
              <h2 className={cx('title')}>{product.title}</h2>
              <div className={cx('price', 'd-flex')}>
                <h4 className={cx('initial-price', 'pe-2')}>{product.price.toLocaleString()}đ</h4>
                <h4 className={cx('discount-price')}>{product.discount.toLocaleString()}đ</h4>
              </div>
              <br />
              <div className={cx('information')}>
                <h5>Trọng lượng: {product.size}</h5>
                <h5>Thông tin sản phẩm:</h5>
                <p>{product.short_description}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Comment/>
      </Row>
    </>
  );
}

export default Product;
