import { useState } from "react";
import { AiFillHome, AiFillFolder, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [showTitles, setShowTitles] = useState(false);
  return (
    <>
      <div className="fixed z-20 h-screen flex justify-center ">
        <div
          onMouseEnter={() => setShowTitles(true)}
          onMouseLeave={() => setShowTitles(false)}
          className="flex flex-col justify-center items-start pl-3 "
        >
          <a
            href="#"
            className="flex items-center my-9 hover:bg-gray-300 rounded-full transition-all duration-250 "
          >
            <div className="text-3xl p-2">
              <AiFillHome />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && " -translate-x-2 opacity-0 "
              } `}
            >
              Inicio
            </p>
          </a>
          <a
            href="#projects"
            className="flex items-center my-9 hover:bg-gray-300 rounded-full transition-all duration-250 "
          >
            <div className="text-3xl p-2">
              <AiFillFolder />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && "-translate-x-2 opacity-0 "
              } `}
            >
              Proyectos
            </p>
          </a>
          <a
            href="#aboutMe"
            className="flex items-center my-9 hover:bg-gray-300 rounded-full transition-all duration-250 "
          >
            <div className="text-3xl p-2">
              <BsFillPersonFill />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && "-translate-x-2 opacity-0 "
              } `}
            >
              {" "}
              Sobre mi
            </p>
          </a>
          <a
            href="#contact"
            className="flex items-center my-9 hover:bg-gray-300 rounded-full transition-all duration-250 "
          >
            <div className="text-3xl p-2 ">
              <AiFillMessage />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && "-translate-x-2 opacity-0 "
              } `}
            >
              Contactame
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
