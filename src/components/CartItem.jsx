import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { incAmount, decAmount, deleteFromCart } = useContext(CartContext);

  return (
    <div className="flex w-full py-2 font-light text-gray-500 border-b border-gray-200 gap-x-4 lg:px-6">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${item.id}`}>
          <img src={item.image} className="max-w-[80px]" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${item.id}`}
              className="text-xs font-medium max-w-[240px] text-primary hover:underline uppercase"
            >
              {item.title}
            </Link>
            <div
              onClick={() => deleteFromCart(item.id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500 " />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center border text-primary font-medium">
              <div
                onClick={() => decAmount(item.id)}
                className="flex items-center justify-center flex-1 h-full cursor-pointer hover:bg-red-400/50"
              >
                <IoMdRemove />
              </div>
              <div
                className={`flex items-center justify-center h-full px-2 ${
                  item.amount === 10 ? "text-gray-200" : ""
                }`}
              >
                {item.amount}
              </div>
              <div
                onClick={() => incAmount(item.id)}
                className="flex items-center justify-center flex-1 h-full cursor-pointer hover:bg-blue-400/50"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex items-center justify-around flex-1 ">
              $ {item.price}
            </div>
            <div className="flex items-center justify-end flex-1 font-medium text-primary">{`$ ${Number(
              item.price * item.amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
