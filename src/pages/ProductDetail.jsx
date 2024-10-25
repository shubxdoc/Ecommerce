import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const currProduct = products.find((item) => item.id === parseInt(id));

  if (!currProduct) {
    return (
      <section className="flex items-center justify-center h-screen">
        Loding..
      </section>
    );
  }

  console.log(currProduct);

  return (
    <section className="flex items-center h-screen pt-32 pb-12 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0 ">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={currProduct.image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text=[26px] font-bold text-xl md:text-2xl mb-2 max-w-[450px] text-primary mx-auto md:mx-0">
              {currProduct.title}
            </h1>
            <div className="mb-6 text-xl font-medium text-red-400">
              ${currProduct.price}
            </div>
            <p className="mb-8 text-gray-500">{currProduct.description}</p>
            <button
              onClick={() => addToCart(currProduct, currProduct.id)}
              className="px-8 py-4 font-medium bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
