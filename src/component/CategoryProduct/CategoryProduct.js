import styles from './CategoryProduct.module.scss';
import classNames from 'classnames/bind';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '~/redux/slice/productSlice';
import chevronDoubleRight from '~/assets/icons/chevronDoubleRight.svg';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function CategoryProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let listProducts = useSelector((state) => {
    return state.product.listProducts;
  });
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  let listSauce = listProducts.filter((product) => product.attributes?.category?.data?.id === 9);
  let listSeaFood = listProducts.filter((product) => product.attributes?.category?.data?.id === 3);

  let listSeaFoodShow = listSeaFood.slice(0, 8);
  let listSauceShow = listSauce.slice(0, 8);
  const handleDetailProduct = (product) => {
    let productName = product.title.replace(/\s+/g, '-').toLowerCase();
    navigate(`/product/${productName}`, {
      state: {
        product,
      },
    });
  };
  console.log(listSeaFoodShow)
  return (
    <>
      <div className={cx('category-container')}>
        <div className={cx('category-title')}>
          <button type="button" className="btn btn-primary btn-lg" id={cx('title-btn')}>
            Hải Sản
          </button>
          <span className={cx('see-all')}>
            Xem tất cả <img src={chevronDoubleRight} width="16px" alt="no-img" />
          </span>
        </div>
        <div className={cx('category-body')}>
          <div className="row no-gutters5">
            {listSeaFoodShow &&
              listSeaFoodShow.length > 0 &&
              listSeaFoodShow.map((item, index) => {
                return (
                  <div
                    className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                    id={cx('product-item')}
                    key={`item-${index}`}
                  >
                    <Card className={cx('card-item', 'text-center')}>
                      <Card.Img
                        className="card-img-top"
                        variant="top"
                        src={process.env.REACT_APP_SERVER_URL + item.attributes.thumnail.data.attributes.url}
                        fluid="true"
                        style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Text>{item.attributes.title}</Card.Text>
                        <div className={cx('price')}>
                          <span className={cx('initial-price')}>{item.attributes.price.toLocaleString()}đ</span>
                          <span className={cx('discount-price')}>{item.attributes.discount.toLocaleString()}đ</span>
                        </div>
                        <div className={cx('btn-add-to-cart')}>
                          <Button variant="outline-primary" onClick={() => handleDetailProduct(item.attributes)}>
                            Xem sản phẩm
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={cx('category-container')}>
        <div className={cx('category-title')}>
          <button type="button" className="btn btn-primary btn-lg" id={cx('title-btn')}>
            Nước Mắm
          </button>
          <span className={cx('see-all')}>
            Xem tất cả <img src={chevronDoubleRight} width="16px" alt="no-img" />
          </span>
        </div>
        <div className={cx('category-body')}>
          <div className="row no-gutters5">
            {listSauceShow &&
              listSauceShow.length > 0 &&
              listSauceShow.map((item, index) => {
                return (
                  <div
                    className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                    id={cx('product-item')}
                    key={`item-${index}`}
                  >
                    <Card className={cx('card-item', 'text-center')}>
                      <Card.Img
                        className="card-img-top"
                        variant="top"
                        src={process.env.REACT_APP_SERVER_URL + item.attributes.thumnail.data.attributes.url}
                        fluid="true"
                        style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Text>{item.attributes.title}</Card.Text>
                        <div className={cx('price')}>
                          <span className={cx('initial-price')}>{item.attributes.price.toLocaleString()}đ</span>
                          <span className={cx('discount-price')}>{item.attributes.discount.toLocaleString()}đ</span>
                        </div>
                        <div className={cx('btn-add-to-cart')}>
                          <Button variant="outline-primary">Xem sản phẩm</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryProduct;
