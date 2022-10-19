import { IoIosRocket } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import ButtonWhite from "./ButtonWhite";
import ButtonDark from "./ButtonDark";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col w-[300px] bg-gray-900 text-white rounded-xl">
      <img
        className=" rounded-t-xl w-full h-[160px] "
        src={props.imgPath}
        alt="card-img"
      />
      <div className="pt-3 flex flex-col p-7">
        <h3 className=" text-xl font-semibold py-1 ">{props.title}</h3>
        <p className="text-sm font-normal">{props.description}</p>
        <div className="flex flex-col items-center ">
          {props.ghLink && (
            <ButtonDark href={props.ghLink}>
              <p className="mr-3 text-base font-semibold "> Ver codigo </p>
              <BsGithub />
            </ButtonDark>
          )}
          {props.demoLink && (
            <ButtonWhite demoLink={props.demoLink}>
              <p className="mr-3 text-base font-semibold "> Ver demo </p>
              <IoIosRocket />
            </ButtonWhite>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
