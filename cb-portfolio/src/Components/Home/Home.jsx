import { Link } from "react-router-dom";
import homeStyle from "../../CSS/Home page Styles/homeStyle.module.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaAngleRight,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";
// import { TypeAnimation } from "react-type-animation";

import { useEffect, useState } from "react";
import { Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";

import resume from "../../Resume/Chetan B Resume 3.pdf";
import Social from "../Social/Social";

function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const databases = new Databases(client);
      try {
        const response = await databases.listDocuments(
          Conf.appWriteDatabaseId,
          Conf.apoWriteCollectionId,
          [Query.limit(3), Query.offset(0), Query.orderDesc("upload_date_time")]
        );

        setProjects(response.documents);
      } catch (error) {
        console.log(console.error("Failed to fetch"));
      }
    };

    fetchData();
  }, []);

  let reversable = true;

  const mySkills = [
    {
      skill: "HTML",
      icon: "Icons/skills icons/html-5-svgrepo-com.webp",
    },
    {
      skill: "CSS",
      icon: "Icons/skills icons/css3-svgrepo-com.webp",
    },
    {
      skill: "Bootstrap",
      icon: "Icons/skills icons/bootstrap.webp",
    },
    {
      skill: "JavaScript",
      icon: "Icons/skills icons/js.webp",
    },
    {
      skill: "React",
      icon: "Icons/skills icons/react.webp",
    },
    {
      skill: "Tailwind CSS",
      icon: "Icons/skills icons/tailwind-css.png",
    },
    {
      skill: "Sass",
      icon: "Icons/skills icons/sass.png",
    },
    {
      skill: "Node.js",
      icon: "Icons/skills icons/nodejs.png",
    },
    {
      skill: "Express.js",
      icon: "Icons/skills icons/express-js.png",
    },
    {
      skill: "MongoDB",
      icon: "Icons/skills icons/mongo-db.png",
    },
    {
      skill: "GitHub",
      icon: "Icons/skills icons/github.webp",
    },
  ];

  return (
    <>
      {/*  hero section start */}
      <section
        className={` px-8 py-5 md:py-10 md:px-20 lg:px-40  flex flex-col `}
      >
        <div className="container h-fit lg:h-[calc(100vh-12rem)] ">
          <p>hello 3</p>
          {/* <div
            className={`${homeStyle.image_part} h-full flex justify-center items-center`}
          >
            <img src="Images/cb portfolio3.webp" alt="My image" />
          </div>
          <div className="intro_part flex flex-col justify-center items-center lg:items-start gap-14">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h3>
                Hello, <span className="text-main">I&apos;m</span>
              </h3>
              <h2 className="text-4xl md:text-5xl text-center lg:text-start font-semibold">
                <span className="text-main p-0">Chetan</span> Bedakihale
              </h2>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Frontend Developer",
                  3000, // wait 1s before replacing "Frontend Developer" with "Web Developer"
                  "Web Developer",
                  3000,
                  "React Developer",
                  3000,
                  "MERN Stack Developer",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                className="text-sm text-secondary-text"
                repeat={Infinity}
              />
            </div>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <p className="text-msm text-secondary-text text-center">
                Let&apos;s bring designs to life with code magic.
              </p>
              <Link
                to="mailto:chetan.bedakihale80@gmail.com"
                className="text-main underline underline-offset-4 hover:drop-shadow-glow w-fit"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div> */}
        </div>

        <div className="social_icons_container my-12 lg:my-0">
          <div className={`${homeStyle.social_links} h-full `}>
            <ul className="flex gap-8 h-full items-center justify-center lg:justify-end">
              <li className={`bg-secondary-bg p-3 `}>
                <Link
                  to="https://www.linkedin.com/in/chetan-bedakihale-17885423b"
                  target="_blank"
                  className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link
                  to="https://github.com/Chetan-B9"
                  target="_blank"
                  className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"
                >
                  <FaGithub />
                </Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link
                  to="https://www.instagram.com/c_h_e_t_a_n_b220?utm_source=qr&igsh=eXMwa2RuMTVvdnow"
                  target="_blank"
                  className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link
                  to="https://api.whatsapp.com/send?phone=919902831780"
                  target="_blank"
                  className="hover:text-main hover:drop-shadow-glow transition duration-150 ease-in-out"
                >
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* About section start */}
      <section
        className={`${homeStyle.about_section} px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg flex flex-col  gap-16 text-center`}
      >
        <h3 className="text-4xl text-main  font-bold">About Me</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center" data-aos="fade-right">
            <img src="Images/About me-cuate.png" alt="about me image"/>
          </div>

          <div className="h-full mt-3 lg:mt-0" data-aos="fade-left">
            <div className=" text-sm text-justify text-secondary-text h-full flex flex-col justify-center">
              <p>
              Hi, I&#39;m <strong className="text-main">Chetan</strong>, a passionate and versatile web developer specializing in frontend and full-stack development. 
              </p>
              <p className="mt-3">
              With a strong foundation in <strong className="text-main">HTML</strong>, <strong className="text-main">CSS</strong>, and <strong className="text-main">JavaScript</strong>, I craft engaging user interfaces and seamless web experiences. My expertise extends to modern frameworks and libraries like <strong className="text-main">React</strong>, <strong className="text-main">Bootstrap</strong>, and <strong className="text-main">Tailwind CSS</strong>, allowing me to create responsive and visually appealing designs.
              </p>
              <p className="mt-3">
              As a MERN stack developer, I&#39;m proficient in <strong className="text-main">MongoDB</strong>, <strong className="text-main">Express.js</strong>, <strong className="text-main">React</strong>, and <strong className="text-main">Node.js</strong>, enabling me to build robust full-stack applications. While I&#39;m a fresher in the industry, my enthusiasm for clean code, attention to detail, and eagerness to learn make me a valuable asset to any development team.
              </p>
              <p className="mt-3">
              I&#39;m excited to bring my skills and creativity to challenging projects and contribute to innovative web solutions. <strong className="text-main">Let&#39;s build something amazing together!</strong> 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About section end  */}

      {/* Projects section start  */}
      <section
        className={`project_section px-8 py-14 md:px-20 lg:px-40 flex flex-col gap-16 text-center`}
      >
        <h3 className="text-4xl text-main  font-bold">My Projects</h3>

        <div className="flex flex-col gap-32 md:gap-44 lg:gap-48">
          {!projects.length ? (
            <p className="text-msm text-secondary-text">Fetching Projects...</p>
          ) : (
            projects.map((project) => {
              reversable = !reversable;
              return (
                <div key={project.project_id}>
                  <ProjectCard
                    projectName={project.project_name}
                    description={project.description}
                    id={project.project_id}
                    thumbnail={project.thumbnail_id}
                    rev={reversable}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="flex justify-center text-msm text-secondary-text">
          <Link
            to="/projects"
            className="flex items-center underline underline-offset-2 hover:text-main hover:drop-shadow-glow"
          >
            See More <FaAngleRight />
          </Link>
        </div>
      </section>
      {/* Projects section end  */}

      {/* Skills section start  */}
      <section className="skill_section px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg">
        <div className="text-center">
          <h3 className="text-4xl text-main  font-bold">My Skills</h3>
        </div>
        <div className="container mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {mySkills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`${homeStyle.skill_box} bg-primary-bg p-10 flex flex-col items-center justify-center gap-3 text-sm rounded-xl transition duration-300 ease-in-out hover:scale-110`}
                data-aos="zoom-in"
              >
                <div className={`${homeStyle.skill_logo}`}>
                  <img
                    src={skill.icon}
                    alt={skill.skill}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-center">{skill.skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Skills section end  */}

      {/* proposal section start  */}
      <Social />
      {/* proposal section end  */}

      {/* resume button */}
      <div className="px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg text-center ">
        <a
          href={resume}
          className="bg-main px-10 py-3 text-secondary-bg rounded-md hover:drop-shadow-glow transition duration-200 ease-in-out"
          role="button"
          download
        >
          My Resume
        </a>
      </div>
    </>
  );
}

export default Home;
