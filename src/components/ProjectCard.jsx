import { IoIosRocket } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import ButtonWhite from "./ButtonWhite";
import ButtonDark from "./ButtonDark";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col w-[300px] bg-gray-900 text-white rounded-xl shadow-xl">
      <div className="">
        <img
          className=" rounded-t-xl w-full h-[160px] box-border "
          src={props.imgPath}
          alt="card-img"
        />
      </div>
      <div className=" flex flex-col h-full justify-between p-7 pt-3">
        <div className="">
          <h3 className=" text-xl font-semibold py-1 ">{props.title}</h3>
          <p className="text-sm font-normal">{props.description}</p>
        </div>
        <div className="flex flex-col items-center ">
          {props.demoLink && (
            <ButtonWhite href={props.demoLink}>
              <p className="mr-3 text-base font-semibold "> Ver demo </p>
              <IoIosRocket />
            </ButtonWhite>
          )}
          {props.ghLink && (
            <ButtonDark href={props.ghLink}>
              <p className="mr-3 text-base font-semibold "> Ver codigo </p>
              <BsGithub />
            </ButtonDark>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
