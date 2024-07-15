import { Outlet } from "react-router-dom";

import Aside from "./Aside";

const MainLayout = () => {
  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
};

export default MainLayout;
