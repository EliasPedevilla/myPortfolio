import { BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center ">
        <h1 className=" text-[50px] font-bold font-sans">Elias Pedevilla</h1>
        <p className=" text-3xl font-light ">Backend Developer</p>
        <div className="flex mt-3">
          <a className=" text-2xl mx-3 " href="">
            <BsGithub />
          </a>
          <a className=" text-2xl mx-3" href="">
            <BsLinkedin />
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
