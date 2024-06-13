import { NavLink } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa";


// import headerStyle from '../../CSS/Home page Styles/header.module.css'
function Header() {
  return (
    //  header portion of the home page
    <section className="px-8 md:px-20 lg:px-40 flex">
        <div className="flex gap-2 items-center w-1/3 ">
            <img src="./cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
        </div>
        <div className="hidden lg:flex flex-1 text-msm ">
            <ul className="lg:flex justify-end items-center  gap-12 w-full h-full font-semibold">
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
                   <NavLink  className='hover:text-main'>Resume</NavLink>
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