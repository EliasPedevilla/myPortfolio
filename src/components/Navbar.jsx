import { useState } from "react";
import { AiFillHome, AiFillFolder, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const [showTitles, setShowTitles] = useState(false);
  return (
    <>
      <div className="fixed z-20 h-screen flex justify-center ">
        <nav
          onMouseEnter={() => setShowTitles(true)}
          onMouseLeave={() => setShowTitles(false)}
          className="flex flex-col justify-center items-start pl-3 w-auto "
        >
          <Link
            to="header"
            smooth={true}
            duration={500}
            className={`flex items-center my-9 hover:bg-gray-300 hover:shadow-md rounded-full transition-all duration-250 cursor-pointer ${
              showTitles && "bg-white"
            } `}
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
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`flex items-center my-9 hover:bg-gray-300 hover:shadow-md rounded-full transition-all duration-250 cursor-pointer ${
              showTitles && "bg-white"
            } `}
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
          </Link>
          <Link
            to="aboutMe"
            smooth={true}
            duration={500}
            className={`flex items-center my-9 hover:bg-gray-300 hover:shadow-md rounded-full transition-all duration-250 cursor-pointer ${
              showTitles && "bg-white"
            } `}
          >
            <div className="text-3xl p-2">
              <BsFillPersonFill />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && "-translate-x-2 opacity-0 "
              } `}
            >
              Sobre mi
            </p>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`flex items-center my-9 hover:bg-gray-300 hover:shadow-md rounded-full transition-all duration-250 cursor-pointer ${
              showTitles && "bg-white"
            } `}
          >
            <div className="text-3xl p-2 ">
              <AiFillMessage />
            </div>
            <p
              className={` text-base font-semibold mx-3 transition-all duration-300 ${
                !showTitles && "-translate-x-2 opacity-0 "
              } `}
            >
              Contacto
            </p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
