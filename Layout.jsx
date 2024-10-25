import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "./src/components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
};

export default Layout;
