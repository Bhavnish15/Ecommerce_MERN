import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <>
      <div className="home">
        <section></section>
        <h1>
          Latest Products
          <Link to={"/search"} className="findmore">
            More
          </Link>
        </h1>
        <main>
          <ProductCard
            productId={"dcs3dca"}
            name="Macbook"
            photo="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"
            handler={addToCartHandler}
            price={59999}
          />
          <ProductCard
            productId={"dcs3dca"}
            name="iPhone"
            photo="https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg"
            handler={addToCartHandler}
            price={7999}
          />
          <ProductCard
            productId={"dcs3dca"}
            name="iPad"
            photo="https://m.media-amazon.com/images/I/414zn58PVUL._SY445_SX342_QL70_FMwebp_.jpg"
            handler={addToCartHandler}
            price={8799}
          />
          <ProductCard
            productId={"dcs3dca"}
            name="Apple Pro Display"
            photo="https://m.media-amazon.com/images/I/81bXhzq2zqL._SX679_.jpg"
            handler={addToCartHandler}
            price={545000}
          />
          <ProductCard
            productId={"dcs3dca"}
            name="Apple Mouttps://m.media-amazon.com/images/I/310m50AeVzL._SX6se"
            photo="h79_.jpg"
            handler={addToCartHandler}
            price={5499}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
