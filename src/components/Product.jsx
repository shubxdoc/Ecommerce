import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] rounded-md h-[300px] mb-4 overflow-hidden group transition relative">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-center gap-2 p-2 transition-all duration-300 opacity-0 i group-hover:right-5 top-6 -right-11 group-hover:opacity-100">
          <button onClick={() => addToCart(product, product.id)}>
            <div className="flex items-center justify-center w-12 h-12 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center w-12 h-12 bg-white drop-shadow-xl text-primary"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm text-gray-500 capitalize">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h2 className="mb-1 font-semibold">{product.title}</h2>
        </Link>
        <div className="font-medium">$ {product.price}</div>
      </div>
    </div>
  );
};

export default Product;
