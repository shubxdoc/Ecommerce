import { useContext } from "react";
import { SideBarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, itemAmount, total, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 p-5 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between border-b">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b border-gray-600">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col items-center py-4 gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {Number(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="flex items-center justify-center w-12 h-12 py-4 text-xl text-black rounded cursor-pointer hover:text-red-500"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium bg-gray-200 text-primary"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium bg-black text-gray-50"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
