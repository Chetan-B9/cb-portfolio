import heroSecStyle from "../../CSS/Home page Styles/heroSection.module.css";
import {NavLink } from "react-router-dom";
import { Storage } from "appwrite";
import { Conf } from "../../conf/Conf";
import client from "../../lib/appwrite";

function ProjectCard({projectName, description, id, thumbnail, rev}) {
    // console.log(props.length > 0 ? true : false)
    const storage = new Storage(client);

    let reverse = rev;
    const strTruncator = (str, maxLength) => {
      return str.length > maxLength
        ? <span>{str.substring(0, maxLength).trim()}<span className="text-main">...</span></span> 
        : str;
    };

  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
         <div className={` h-full flex justify-center ${reverse ? 'order-2' : 'order-1'} `} data-aos="fade-down">
           <div className={`${heroSecStyle.project_img} flex justify-cente project_img rounded-xl`}>
             <img src={(storage.getFileView(Conf.appWriteThumbnailsBucketId, thumbnail)).href} alt="about me image" className="w-full h-full object-cover rounded-xl"/>
           </div>
         </div>

         <div className={`flex flex-col items-center justify-center gap-4 px-10 text-sm ${reverse ? 'order-1' : 'order-2'}`} data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-main text-3xl">{projectName}</h2>
            <p className="text-sm text-secondary-text">{strTruncator(description, 150)}</p>
            <NavLink to="#" className="hover:text-main hover:drop-shadow-glow underline underline-offset-4 my-4">View Project</NavLink>
         </div>
       </div>
    </>
  )
}

export default ProjectCard