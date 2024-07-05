import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: String;
  photo: string;
  name: string;
  price: Number;
  handler: () => void;
};
const server = "dssdv";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  handler,
}: ProductProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>${price}</span>

      <div>
        <button onClick={()=> handler()}>
            <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
