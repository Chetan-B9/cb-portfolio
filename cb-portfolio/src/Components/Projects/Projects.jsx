import ProjectCard from "./ProjectCard"
// import projectsStyle from '../../CSS/Projects page sytles/projects.module.css'
// import { useLoaderData } from "react-router-dom"

import { Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";

import { LoadingOutlined } from '@ant-design/icons';
import {Spin} from 'antd';

function Projects() {
  // const loadedprojects = useLoaderData()
  const [projects, setProjects] = useState([])
  const [total, setTotal] = useState(0);
  const [currentPage, setcurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const totalProjects = async () => {
      const databases = new Databases(client)
      try{
        const totalResponse = await databases.listDocuments(
          Conf.appWriteDatabaseId,
          Conf.apoWriteCollectionId,
        )

        
        setTotal((totalResponse.total / 6) > Math.trunc(totalResponse.total / 6) ? Math.trunc(totalResponse.total/6) + 1 : totalResponse.total / 6)
      }
      catch (error) {
        console.log(console.error('Failed to fetch'));
      }
    }

    totalProjects()
  }, [])

  useEffect(() => {
    const projectsData = async () => {
      setLoading(true)
      const databases = new Databases(client)
        try{
          const pageResponse = await databases.listDocuments(
            Conf.appWriteDatabaseId,
            Conf.apoWriteCollectionId,
            [
              Query.limit(6),
              Query.offset((currentPage * 6) - 6),
              Query.orderDesc("upload_date_time"),
          ]
          )
    
          setProjects(pageResponse.documents);
          pageResponse && setLoading(false)
        }
        catch (error) {
          console.log(console.error('Failed to fetch'));
        }
    }

    projectsData()
  }, [currentPage])

  const handleCurrentPage =(page) => {
    setcurrentPage(page)
  }

  return (
    <>
       
        {/* Breadcrubm start */}
        {/* <section className="breadcrumb_section px-8 pt-10 md:px-20 lg:px-40">
           <div>
           <Breadcrumb itemRender={itemRender} items={items} className="custom-breadcrumb"/>
           </div>
        </section> */}
        {/* Breadcrubm end */}

        <section className="projects_section px-8 pt-16 md:px-20 lg:px-40">

          {
            loading 
              ? <div className='flex items-center flex-col gap-4'>
          <Spin indicator={<LoadingOutlined spin style={{color: '#64f4ac'}} />} size="large" />
          <p className='text-secondary-text text-sm'>Loading Projects...</p>
        </div>
              : <div className="container grid grid-cols-3 gap-x-5 gap-y-16">
            {
              projects.map((project) => {
                return (
                  <ProjectCard key={project.project_id} project = {project}/>
                )
              })
            }
            
          </div>
          }

          {/* pagination */}
          <div className="my-14 flex justify-center">
           {/* <Pagination  current={currentPage} pageSize={6} total={total} onChange={(page) => handleCurrentPage(page)} className="custom-pagination"/> */}
           <Stack spacing={2}>
      <Pagination page = {currentPage} count={total} shape="rounded" onChange={(event, page) => handleCurrentPage(page)} sx={{
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
      '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#64f4ac',
        color: '#25262a',
      }
    }}/>
    </Stack>

          </div>
          
        </section>
    </>
  )
}

export default Projects

// export const projectsData = async () => {
//   const databases = new Databases(client)
//     try{
//       const response = await databases.listDocuments(
//         Conf.appWriteDatabaseId,
//         Conf.apoWriteCollectionId,
//         [
//           Query.orderDesc("upload_date_time"),
//       ]
//       )

//       return response.documents;
//     }
//     catch (error) {
//       console.log(console.error('Failed to fetch'));
//     }
// }