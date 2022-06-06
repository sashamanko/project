import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
// import './Layout.css';

const Layout = () => {
  return (
    <>
      <Header/>
      <main className="container">
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;