import { NavLink } from "react-router-dom"
import { MdEditAttributes, MdSpaceDashboard, MdFormatListBulletedAdd } from "react-icons/md";



// import headerStyle from '../../CSS/Home page Styles/header.module.css'
function Header() {
  return (
    //  header portion of the home page
    <section className="px-8 md:px-20 lg:px-40 flex flex-col">
        <div className="flex gap-2 items-center justify-center">
            <img src="./cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
        </div>
        <div className="flex justify-center items-center text-msm mt-6">
            <ul className="flex items-center gap-12 w-fit h-full font-semibold">
                <li className="">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}><span className="flex gap-1"><MdSpaceDashboard className="text-xl"/> Dashboard</span></NavLink>
                </li>
                <li>
                   <NavLink to="/add" className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}><span className="flex gap-1"><MdFormatListBulletedAdd className="text-xl"/>Add</span></NavLink>
                </li>
                <li>
                   <NavLink to="/upadate"  className={({isActive}) => isActive ? "text-main" : "text-primary-text hover:text-main"}><span className="flex gap-1"><MdEditAttributes className="text-xl"/> Update</span></NavLink>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default Header