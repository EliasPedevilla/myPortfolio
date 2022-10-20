import {
  BsLinkedin,
  BsGithub,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs";

const Header = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-full"
      id="header"
    >
      <div className="flex flex-col items-center ">
        <h1 className=" text-[50px] font-bold font-sans">Elias Pedevilla</h1>
        <p className=" text-3xl font-light ">Backend Developer</p>
        <div className="flex">
          <a
            className="flex items-center ml-3"
            href={"/CV.pdf"}
            target="blank"
            rel="noopener noreferrer"
            download="CV Elias Pedevilla - Backend Developer.pdf"
          >
            <div className="text-2xl mx-1">
              <BsFileEarmarkArrowDownFill />
            </div>
            <p className="text-lg font-bold my-3">Mi CV</p>
          </a>
          <a
            className="flex items-center ml-3 "
            href="https://github.com/EliasPedevilla"
          >
            <div className="text-2xl mx-3">
              <BsGithub />
            </div>
          </a>
          <a
            className="flex items-center ml-3"
            href="https://www.linkedin.com/in/elias-pedevilla-54ab1023a/"
          >
            <div className="text-2xl mx-3">
              <BsLinkedin />
            </div>
          </a>
        </div>
      </div>
      <div className="border shadow-xl rounded-[50%] w-[300px] h-[300px] ml-[100px] overflow-hidden">
        <img
          className=" relative -top-16 w-[250px] left-6"
          src="/perfil.png"
          alt="perfil"
        />
      </div>
    </div>
  );
};

export default Header;
