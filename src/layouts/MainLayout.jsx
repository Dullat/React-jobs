import { Outlet } from "react-router-dom";
import Navbar from "../componants/NavBar.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
