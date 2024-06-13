
import { Link } from "react-router-dom";
import heroSecStyle from "../../CSS/Home page Styles/heroSection.module.css";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaAngleRight  } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
// import { useEffect } from "react";
// import projects from "../../JSON/projects-data.json"
import { useEffect, useState } from "react";
import { Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";

// import SkillCard from "./SkillCard";

function Home() {
  const [projects, setProjects] = useState([]) 
  useEffect(() => {
    const fetchData = async () => {
      const databases = new Databases(client)
      try{
        const response = await databases.listDocuments(
          Conf.appWriteDatabaseId,
          Conf.apoWriteCollectionId,
          [
            Query.limit(3),
            Query.offset(0),
            Query.orderDesc("upload_date_time"),
        ]
        )
  
        setProjects(response.documents);
      }
      catch (error) {
        console.log(console.error('Failed to fetch'));
      }
    }

    fetchData()
    
  })
  // const [threeProjects] = useState(projects.reverse().slice(0, 3))
  let reversable = true;
 

  const mySkills = [
    {
      skill: "HTML",
      icon: "Icons/skills icons/html-5-svgrepo-com.webp",
      score: 80,
    },
    {
      skill: "CSS",
      icon: "Icons/skills icons/css3-svgrepo-com.webp",
      score: 80,
    },
    {
      skill: "Bootstrap",
      icon: "Icons/skills icons/bootstrap.webp",
      score: 75,
    },
    {
      skill: "JavaScript",
      icon: "Icons/skills icons/js.webp",
      score: 80,
    },
    {
      skill: "PHP",
      icon: "Icons/skills icons/php.webp",
      score: 60,
    },
    {
      skill: "MYSQL",
      icon: "Icons/skills icons/mysql.webp",
      score: 55,
    }, 
    {
      skill: "React",
      icon: "Icons/skills icons/react.webp",
      score: 75,
    },
    {
      skill: "Tailwind CSS",
      icon: "Icons/skills icons/tailwind-css.png",
      score: 65,
    },
    {
      skill: "GitHub",
      icon: "Icons/skills icons/github.webp",
      score: 60,
    },
  ]
  


 

  return (
    <>
    <div className="container">
{/*  hero section start */}
<section
      className={`${heroSecStyle.hero_section} px-8 pt-10 md:px-20 lg:px-40  flex flex-col lg:h-[calc(100vh - 76px)]`}
    >
      <div className="container lg:h-[80%] grid grid-cols-1 lg:grid-cols-2">
        <div className={`${heroSecStyle.image_part} h-full flex justify-center items-center`}>
          <img
            src="Images/cb portfolio3.webp"
            alt="My image"
          />
        </div>
        <div className="intro_part flex flex-col justify-center items-center lg:items-start gap-14">
          {/* <div className="bg-slate-600"> */}
            <div className="flex flex-col gap-3">
              <h3 className="">Hello, <span className="text-main">I&apos;m</span></h3>
              <h2 className="text-5xl font-semibold"><span className="text-main p-0">Chetan</span> Bedakihale</h2>
              <p className="text-sm text-secondary-text w-fit">Frontend Developer</p>
            </div>
          {/* </div> */}
          <div className="flex flex-col gap-2">
            <p className="text-msm text-secondary-text">Let&apos;s bring designs to life with code magic.</p>
            <Link href="mailto:chetan.bedakihale80@gamil.com" className="text-main underline underline-offset-4 hover:drop-shadow-glow w-fit">Let&apos;s Talk</Link>
          </div>
        </div>
      </div>

      <div className="social_icons_container lg:h-[20%]">
         <div className={`${heroSecStyle.social_links} h-full `}>
            <ul className="flex gap-8 h-full items-center justify-end">
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"><FaLinkedinIn /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"><FaGithub  /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"><FaInstagram  /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"><FaWhatsapp  /></Link>
              </li>
          
            </ul>
         </div>
      </div>
    </section>
    {/* hero section end */}

    {/* About section start */}
    <section className={`${heroSecStyle.about_section} px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg flex flex-col  gap-16 text-center`}>
        <h3 className="text-4xl text-main  font-bold">About Me</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center" data-aos="fade-right">
          <img src="Images/About me-cuate.png" alt="about me image" />
        </div>

        <div className="h-full" data-aos="fade-left">
       <div className=" text-sm text-justify text-secondary-text h-full flex flex-col justify-center">
         <p>As a web developer, coding has been my playground for years. With a toolbox of HTML, CSS, Bootstrap, JavaScript (React), and PHP, I bring ideas to life through dynamic web experiences. What drives me? The thrill of solving problems with elegant code, transforming concepts into pixels, and connecting with people through the digital realm.
        </p>
         <p  className="mt-3">If you&apos;re looking for a code warrior who&apos;s also a creative enthusiast, <Link to="#" className="text-main underline underline-offset-3">let&apos;s collaborate</Link> and build something awesome together. I&apos;m always eager to join forces on cool projects that merge technical prowess with innovative thinking.
        </p>
       </div>
       </div>
        </div>
    </section> 
    {/* About section end  */}

    {/* Projects section start  */}
    <section className={`project_section px-8 py-14 md:px-20 lg:px-40 flex flex-col gap-16 text-center`}>
       <h3 className="text-4xl text-main  font-bold">My Projects</h3>

       <div className="flex flex-col gap-48">
         {

          projects.map((project) => {
            reversable = !reversable;
            return (
              <div key={project.project_id}>
                <ProjectCard  projectName={project.project_name} description={project.description} id={project.project_id} thumbnail={project.thumbnail_id} rev={reversable}/>
              </div>
              
            )
           
          })
         }
         
       </div>
       <div className="flex justify-center text-msm text-secondary-text">
         <Link to='/projects' className="flex items-center underline underline-offset-2 hover:text-main hover:drop-shadow-glow">See More <FaAngleRight /></Link>
       </div>
    </section>
    {/* Projects section end  */}

    {/* Skills section start  */}
    <section className="skill_section px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg">
        <div className="text-center">
          <h3 className="text-4xl text-main  font-bold">My Skills</h3>
        </div>
        <div className="container my-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {
            mySkills.map((skill) => {
                return (
                  <div key={skill} className= {`${heroSecStyle.skill_box} bg-primary-bg p-10 flex flex-col items-center justify-center gap-3 text-sm rounded-xl transition duration-300 ease-in-out hover:scale-110`} data-aos="zoom-in">
                     <div className={`${heroSecStyle.skill_logo}`}>
                       <img src={skill.icon} alt={skill.skill} width={60} height={60} />
                     </div>
                     <div>
                        <p className="">{skill.skill}</p>
                     </div>
                  </div>
                )
              
            })
          }
        </div>
    </section>
    {/* Skills section end  */}

    {/* proposal section start  */}
    <section className="proposal_section px-8 py-14 md:px-20 lg:px-40 flex flex-col items-center gap-10">
      <div className="text-center w-full md:w-1/2">
        <h3 className="font-dm-sans text-2xl font-bold">Interested in <span className="text-main">collaborating</span> with me?</h3>
        <p className="text-sm text-secondary-text my-3">I am always open to discussing web-based projects and partnership opportunities.</p>
      </div>

      <div className="flex gap-10 text-xl ">
        <Link to="#" className="hover:text-main hover:drop-shadow-glow"><FaLinkedinIn /></Link>
        <Link to="#" className="hover:text-main hover:drop-shadow-glow"><FaGithub  /></Link>
        <Link to="#" className="hover:text-main hover:drop-shadow-glow"><FaInstagram  /></Link>
        <Link to="#" className="hover:text-main hover:drop-shadow-glow"><FaWhatsapp  /></Link>
      </div>
    </section>
    {/* proposal section end  */}

    {/* resume button */}
    <div className="px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg text-center ">
      <Link to="#" className="bg-main px-10 py-3 text-secondary-bg rounded-md hover:drop-shadow-glow transition duration-200 ease-in-out" role="button">My Resume</Link>
    </div>
    </div>
    
    </>
   
  );
}

export default Home;
