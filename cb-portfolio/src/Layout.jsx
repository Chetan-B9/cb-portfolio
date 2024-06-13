import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Customize AOS options if needed
    });
  }, []); // The empty dependency array ensures that AOS.init() is only called once when the component mounts

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
