import { Link } from "react-router-dom";
import projectStyle from '../../CSS/Projects page sytles/projects.module.css'
import { Conf } from "../../conf/Conf";
import { Storage } from "appwrite";
import client from "../../lib/appwrite";


function ProjectCard(props) {
    const {project_id, project_name, description, thumbnail_id} = props.project;
    
    const storage = new Storage(client);

  return (
    <div className={`${projectStyle.card} bg-secondary-bg rounded-xl hover:scale-105 duration-200`}>
      <div className={`h-[13rem] rounded-t-xl overflow-hidden`}>
        <img
          src={(storage.getFileView(Conf.appWriteThumbnailsBucketId, thumbnail_id)).href}
          alt=""
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="py-4 px-5">
        <div>
          <h3 className="text-xl text-main">{project_name.length > 25 ? project_name.slice(0, 24) + '...' : project_name}</h3>
          <p className="text-msm mt-3 text-secondary-text text-justify">
            {description.slice(0, 120) + '...'}
          </p>
        </div>

        <div className="mt-5 pb-3">
          <Link
            to="#"
            className=" text-sm underline underline-offset-4 hover:text-main hover:drop-shadow-glow "
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
