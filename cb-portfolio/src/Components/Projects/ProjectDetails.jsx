import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


import {Storage, Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";

import { LoadingOutlined } from '@ant-design/icons';
import {  Carousel, Spin } from 'antd';
import Social from '../Social/Social';

// Importing icons

function ProjectDetails() {
    const {pId} = useParams()
    const navigate = useNavigate();
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
    <section className='container px-8  md:px-20 lg:px-40 mt-10'>
      <div className='mb-10'>
        <button className=' text-msm flex items-center gap-2 hover:text-main hover:drop-shadow-glow' onClick={() => navigate('/projects')}><IoIosArrowBack/> <p>Go to projects</p></button>
      </div> 
    {
      Object.keys(projects).length > 0 ?
        <div className='flex flex-col md:flex-row gap-12 md:gap-16'>
            <div className='w-full  md:w-[70%] flex flex-col gap-4'>
              <h1 className='text-xl md:text-3xl lg:text-4xl text-main font-bold'>{project_name}</h1>
              <p className='text-sm text-justify'>{description}</p>
              <div className='mt-5'>
                <h2 className='text-lg font-bold text-main'>Features:</h2>
                <div className='flex justify-center py-3'>
                {
                  features.length > 0 ? 
                  <ul className='text-sm pl-8 text-justify'>
                    { 
                      features.map((feature, index) => (
                         <li key={index} className='list-disc mt-3'>{feature}</li>
                       )) 
                    }
                    
                </ul>
                : 
                (<p className='text-secondary-text text-msm'>Features are not mentioned!</p>)
                }
                </div>
              </div>

              
            </div>

            <div className=''>
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

     {
      Object.keys(projects).length > 0 && <div className='w-full mt-10 md:w-[70%]'>
              <h2 className='text-lg font-bold text-main'>Screenshots: </h2>
    <div>
    
    <Carousel arrows dotPosition="left" draggable={true} infinite={true} autoplay className=' pl-6 py-6'>
    {
      screenshots && screenshots.map((screenshot, index) => {
      return  <div key={index}>
      <img src={(storage.getFileView(Conf.appWriteScreenshotsBucketId, screenshot)).href} alt={`screenshot ${index + 1}`} />
    </div>
    })
    }
   
  </Carousel>

  </div>
    </div>
     }
    

    {/* proposal section start  */}
     <Social />
    {/* proposal section end  */}
    </section>

    
  )
}

export default ProjectDetails