import classNames from 'classnames/bind';
import styles from './HotProduct.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import iconImages from '~/assets/iconImages';
const cx = classNames.bind(styles);
function HotProduct() {
  const settings = {
    classNames: 'center',
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    cssEase: 'linear',
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={cx('title-container')}>
        <img width="32px" height="32px " src={iconImages.hot} alt="no-img"/>
        <span className={cx('title-text')}>Sản phẩm bán chạy</span>
      </div>
      <br/>
      <Slider {...settings}>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className={cx('card-item')}>
          <Card.Img
            className="card-img"
            variant="top"
            src="https://haisantrungnam.vn/wp-content/uploads/2022/04/bao-ngu-lon-2-400x400.jpg"
          />
          <Card.Body>
            <Card.Text>Bào Ngư Đông Lạnh Size Lớn Khay 500Gr (6 con)</Card.Text>
            <div className={cx('price')}>
              <span className={cx('initial-price')}>250000</span>
              <span className={cx('discount-price')}>250000</span>
            </div>
            <div className={cx('btn-add-to-cart')}>
              <Button variant="outline-primary">Xem sản phẩm</Button>
            </div>
          </Card.Body>
        </Card>
      </Slider>
    </>
  );
}

export default HotProduct;
