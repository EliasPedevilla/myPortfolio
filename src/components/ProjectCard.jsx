import { IoIosRocket } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col w-[300px] p-4 bg-gray-900 text-white rounded">
      <img className=" rounded h-[160px] " src={props.imgPath} alt="card-img" />
      <div className="pt-3 ">
        <h3 className=" text-lg font-semibold py-1 ">{props.title}</h3>
        <p className="text-sm font-normal">{props.description}</p>
        <div className="flex justify-evenly pt-4 ">
          {props.ghLink !== undefined && (
            <a
              className="flex items-center rounded px-3 bg-white text-gray-900 "
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <p className="mr-3 font-medium "> Code </p>
              <BsGithub />
            </a>
          )}
          {props.demoLink !== undefined && (
            <a
              className="flex items-center rounded px-3 bg-white text-gray-900"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <p className="mr-3 font-medium "> Demo </p>
              <IoIosRocket />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
