import { AiFillHome, AiFillFolder, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="fixed ml-3 z-20 h-screen flex justify-center">
        <div className="flex flex-col justify-center items-start">
          <a href="#" className="flex items-center my-9 ">
            <div className="text-3xl hover:bg-gray-300 p-2 rounded-full hover:text-[#404040]">
              <AiFillHome />
            </div>
            <p className=" text-base font-semibold mx-3 ">Inicio</p>
          </a>
          <a href="#projects" className="flex items-center my-9 ">
            <div className="text-3xl hover:bg-gray-300 p-2 rounded-full hover:text-[#404040]">
              <AiFillFolder />
            </div>
            <p className=" text-base font-semibold mx-3 "> Proyectos </p>
          </a>
          <a href="#aboutMe" className="flex items-center my-9 ">
            <div className="text-3xl hover:bg-gray-300 p-2 rounded-full hover:text-[#404040]">
              <BsFillPersonFill />
            </div>
            <p className=" text-base font-semibold mx-3 "> Sobre mi</p>
          </a>
          <a href="#contact" className="flex items-center my-9 ">
            <div className="text-3xl hover:bg-gray-300 p-2 rounded-full hover:text-[#404040]">
              <AiFillMessage />
            </div>
            <p className=" text-base font-semibold mx-3 "> Contactame </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
