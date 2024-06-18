import { NavLink } from "react-router-dom"
import { FaEnvelope, FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import resume from '../../Resume/Chetan B Resume 3.pdf'
import { useState } from "react";


// import headerStyle from '../../CSS/Home page Styles/header.module.css'
function Header() {
    const [togle, setTogle] = useState(false);
    
    const handleTogle = () => {
        setTogle(!togle)
    }

  return (
    //  header portion of the home page
    <section className="px-8 md:px-20 lg:px-40 flex">
        <div className="flex gap-2 items-center w-1/3 ">
            <img src="./cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
        </div>
        <div className="md:hidden w-full">
            <div className="flex justify-end w-full">
              <button className="relative" onClick={handleTogle}>
              <FaBars />
              
            </button>
            <div className={`${togle ? 'block translate-x-0' : ' translate-x-[100%]'} fixed top-0 right-0 w-full p-6 h-[100vh] bg-secondary-bg z-30 duration-300`}>
                <div className="flex justify-end">
                    <button className="text-3xl" onClick={handleTogle}><IoCloseSharp /></button>
                </div>
                <div className="py-8 h-full flex flex-col justify-between">
                <ul className=" flex flex-col h-full gap-16 justify-center items-center text-xl">
                    <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"} onClick={() => setTogle(false)}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/projects" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"} onClick={() => setTogle(false)}>Projects</NavLink>
                    </li>
                    <li>
                    <a href="" className='hover:text-main' download={resume} onClick={() => setTogle(false)}>Resume</a>
                    </li>
                    
                </ul>
                
                <div className="flex gap-2 items-center justify-center">
            <img src="./cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
        </div>
                </div>
              </div>
            </div>
        </div>
        <div className="hidden md:flex flex-1 text-msm ">
            <ul className="md:flex justify-end items-center  gap-12 w-full h-full font-semibold">
                <li className="">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}>Home</NavLink>
                </li>
                {/* <li className="hover:text-main">
                   <NavLink to="/about" className={({isActive}) => isActive ? "text-main" : "text-primary-text"}>About</NavLink>
                </li> */}
                <li>
                   <NavLink to="/projects" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}>Projects</NavLink>
                </li>
                <li>
                   <a href="" className='hover:text-main' download={resume}>Resume</a>
                </li>
                <li>
                   <NavLink to="mailto:chetan.bedakihale80@gamil.com" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}><FaEnvelope   /></NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Header