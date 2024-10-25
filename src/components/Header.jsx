import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { PiCoatHangerBold } from "react-icons/pi";

const Header = () => {
  const { setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all py-2`}
    >
      <div className="container flex items-center justify-between h-full mx-auto">
        <Link to={"/"}>
          <div>
            <PiCoatHangerBold size="2em" className="w-[40px] " />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex"
        >
          <BsBag className="text-2xl" />
          <div className="absolute bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
