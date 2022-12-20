import HomeCarousel from '~/component/Carousels/HomeCarousel/HomeCarousel';
import CategoryProduct from '~/component/CategoryProduct/CategoryProduct';
import HotProduct from '~/component/HotProduct/HotProduct';

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <HomeCarousel />
      <br />
      <br />
      <HotProduct />
      <br />
      <br />
      <CategoryProduct />
    </>
  );
}

export default Home;
