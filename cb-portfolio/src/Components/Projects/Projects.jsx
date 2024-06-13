import ProjectCard from "./ProjectCard"
import { useLoaderData } from "react-router-dom"

import { Databases, Query } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../conf/Conf";
import { useEffect, useState } from "react";

function Projects() {
  // const loadedprojects = useLoaderData()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const projectsData = async () => {
      const databases = new Databases(client)
        try{
          const response = await databases.listDocuments(
            Conf.appWriteDatabaseId,
            Conf.apoWriteCollectionId,
            [
              Query.orderDesc("upload_date_time"),
          ]
          )
    
          setProjects(response.documents)
        }
        catch (error) {
          console.log(console.error('Failed to fetch'));
        }
    }

    projectsData()
  }, [])

  return (
    <>
        {/* Breadcrubm start */}
        <section className="breadcrumb_section px-8 pt-10 md:px-20 lg:px-40">
           <div>
            <p>Home/Projects</p>
           </div>
        </section>
        {/* Breadcrubm end */}

        <section className="projects_section px-8 pt-10 md:px-20 lg:px-40">

          {
            !projects.length 
              ? <div className="w-full text-center">
                    <p className="text-msm text-secondary-text">Fetching Projects...</p> 
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