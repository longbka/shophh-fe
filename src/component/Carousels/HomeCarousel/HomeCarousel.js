import Carousel from 'react-bootstrap/Carousel';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './HomeCarousel.module.scss';
const cx = classNames.bind(styles);
function HomeCarousel() {
  return (
    <>
      <Carousel className={cx('carousel')} interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={images.carouselHome1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={images.carouselHome1} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={images.carouselHome2} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCarousel;
