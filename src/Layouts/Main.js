import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import MenuBar from "../Pages/Shared/MenuBar/MenuBar";

const Main = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
