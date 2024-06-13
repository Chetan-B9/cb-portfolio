import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub ,  FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";


import {Storage, Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";

import { LoadingOutlined } from '@ant-design/icons';
import {  Carousel, Spin } from 'antd';

// Importing icons

function ProjectDetails() {
    const {pId} = useParams()
    console.log(pId);
    const [projects, setProjects] = useState({})
    const storage = new Storage(client);

    const {project_name, description, features, technologies, live_link, github_link, screenshots} = projects;


    const icons = {
        'HTML' : '/Images/Icons/skills icons/html-5-svgrepo-com.webp',
        'CSS' : '/Images/Icons/skills icons/css3-svgrepo-com.webp',
        'JAVASCRIPT' : '/Images/Icons/skills icons/js.webp',
        'REACT' : '/Images/Icons/skills icons/react.webp',
        'BOOTSTRAP' : '/Images/Icons/skills icons/bootstrap.webp',
        'TAILWIND CSS' : '/Images/Icons/skills icons/tailwind-css.webp',
        'GITHUB' : '/Images/Icons/skills icons/github.webp',
        'PHP' : '/Images/Icons/skills icons/php.webp',
        'MYSQL' : '/Images/Icons/skills icons/mysql.webp',
    }

    useEffect(()=> {
        const projectsData = async () => {
            const databases = new Databases(client)
              try{
                const response = await databases.listDocuments(
                  Conf.appWriteDatabaseId,
                  Conf.apoWriteCollectionId,
                  [
                    Query.equal("project_id", [pId.toString()]),
                ]
                )
          
                setProjects(response.documents[0])
                
              }
              catch (error) {
                console.log(console.error('Failed to fetch'));
              }
          }
      
          projectsData()
    }, [pId])
    
  return (
    <section className='container px-8 pt-10 md:px-20 lg:px-40 mt-10'>
    {
      Object.keys(projects).length > 0 ?
        <div className='flex gap-16'>
            <div className='w-full  md:w-[70%] flex flex-col gap-4'>
              <h1 className='text-lg md:text-3xl lg:text-4xl text-main font-bold'>{project_name}</h1>
              <p className='text-sm text-justify'>{description}</p>
              <div className='mt-5'>
                <h2 className='text-lg font-bold text-main'>Features:</h2>
                <ul className='text-sm pl-8 mt-2 text-justify'>
                    { 
                      features && features.map((feature, index) => (
                         <li key={index} className='list-disc mt-1'>{feature}</li>
                       ))
                    }
                    
                </ul>
              </div>

              
            </div>

            <div>
                <div>
                    <h2 className='text-main font-bold'>Used technologies</h2>
                    <div className='flex gap-3 rounded-lg mt-4'>
                        {
                          technologies && technologies.map((tech, index) => (
                              Object.hasOwn(icons, tech.toUpperCase()) && <div key={index} className='w-[2.5rem] h-[2.5rem] p-2  bg-secondary-bg rounded-md'>
                                <img src={icons[tech.toUpperCase()]} alt={`${tech}`} className='w-full h-full object-contain'/>
                              </div>
                            ))
                        }
                    </div>
                </div>

                <div className='mt-6 text-sm flex flex-col gap-5'>
                   {
                    live_link && <div className='flex gap-3 items-center'>
                    <FaExternalLinkAlt />
                      <Link to={live_link} className='hover:drop-shadow-glow hover:text-main'>View Live</Link>
                    </div>
                   }

                   {
                    github_link && <div className='flex gap-3 items-center'>
                      <FaGithub />
                      <Link to={github_link} className='hover:drop-shadow-glow hover:text-main'>GitHub</Link>
                    </div>
                   }
                </div>
            </div>
        </div>
        : 
        <div className='flex items-center flex-col gap-4'>
          <Spin indicator={<LoadingOutlined spin style={{color: '#64f4ac'}} />} size="large" />
          <p className='text-secondary-text text-sm'>Fetching Project Data</p>
        </div>

    }

    <div className='w-full mt-10 md:w-[70%]'>
              <h2 className='text-lg font-bold text-main'>Screenshots: </h2>
    <div>
    
    <Carousel arrows dotPosition="left" draggable={true} infinite={false} className=' pl-6 py-6'>
    {
      screenshots && screenshots.map((screenshot, index) => {
      return  <div key={index} className=' bg-blue-500'>
      <img src={(storage.getFileView(Conf.appWriteScreenshotsBucketId, screenshot)).href} alt={`screenshot ${index + 1}`} />
    </div>
    })
    }
   
  </Carousel>

  </div>
    </div>

    {/* proposal section start  */}
    <div className="proposal_section px-8 py-14 md:px-20 lg:px-40 flex flex-col items-center gap-10 border-t-[.1px] border-secondary-text mt-14">
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
    </div>
    {/* proposal section end  */}
    </section>

    
  )
}

export default ProjectDetails