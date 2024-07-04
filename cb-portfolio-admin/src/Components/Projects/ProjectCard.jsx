import { Link } from "react-router-dom";
import projectStyle from "../../CSS/Projects page sytles/projects.module.css";
import { Conf } from "../../Conf/conf";
import { Storage } from "appwrite";
import client from "../../lib/appwrite";

import { MdDelete, MdEdit } from "react-icons/md";

function ProjectCard(props) {
  const { project_id, thumbnail_id } = props.project;
  const storage = new Storage(client);

  return (
    <>
  
    <div
      className={`${projectStyle.card} bg-secondary-bg rounded-xl hover:scale-105 duration-200 grayscale hover:grayscale-0`}
    >
      <div className={`h-[15rem] rounded-xl overflow-hidden relative`}>
        <img
          src={
            storage.getFileView(Conf.appWriteThumbnailsBucketId, thumbnail_id)
              .href
          }
          alt=""
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-5 group">
           <Link title="Edit" className="p-4 rounded-full text-xl bg-main text-secondary-bg  duration-300 translate-y-8 opacity-0 hover:drop-shadow-glow group-hover:translate-y-0 group-hover:opacity-100" onClick={handleOpen}><MdEdit /></Link>
           <Link title="Delete" className="p-4 rounded-full text-xl bg-main text-secondary-bg duration-200 translate-y-8 opacity-0 hover:drop-shadow-glow group-hover:translate-y-0 group-hover:opacity-100  " ><MdDelete /></Link>
        </div>
      </div>

      
{/* 
      <div className="py-4 px-5">
        <div>
          <h3 className="text-lg md:text-xl text-main">
            {project_name.length > 25
              ? project_name.slice(0, 24) + "..."
              : project_name}
          </h3>
          <p className="text-msm mt-3 text-secondary-text text-justify">
            {description.slice(0, 120) + "..."}
          </p>
        </div>

        <div className="mt-5 pb-3">
          <Link
            to={`/projects/project-details/${project_id}`}
            className=" text-sm underline underline-offset-4 hover:text-main hover:drop-shadow-glow "
          >
            View Project
          </Link>
        </div>
      </div> */}
    </div>

    </>
  );
}

export default ProjectCard;
