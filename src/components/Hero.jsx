import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[800px] py-24"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex justify-around h-full mx-auto">
        <div className="flex flex-col text-white md:justify-center">
          <div className="flex items-center font-semibold uppercase bg-red-500">
            New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            FESTIVE SALE <br />
            <span className="font-semibold uppercase">women's</span>
          </h1>
          <Link
            to={"/"}
            className="flex items-center self-start gap-1 font-medium uppercase border-b border-white group"
          >
            Discover more{" "}
            <FaArrowRightLong className="inline w-3 duration-200 hover:transition-all group-hover:translate-x-2 group-hover:w-4" />
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
