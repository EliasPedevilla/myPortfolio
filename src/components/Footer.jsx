import {
  BsFileEarmarkArrowDownFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-between bg-gray-300 px-6 ">
      <p className="text-lg font-normal my-3">
        Elias Pedevilla - Argentina - pedevillae@gmail.com - +542664171152
      </p>
      <div className="flex">
        <a
          className="flex items-center ml-3"
          href={"/CV.pdf"}
          target="blank"
          rel="noopener noreferrer"
          download="CV Elias Pedevilla - Backend Developer.pdf"
        >
          <div className="text-2xl mx-3">
            <BsFileEarmarkArrowDownFill />
          </div>
          <p className="text-lg font-semibold my-3">Descarga mi CV</p>
        </a>
        <a
          className="flex items-center ml-3 "
          href="https://github.com/EliasPedevilla"
        >
          <div className="text-2xl mx-3">
            <BsGithub />
          </div>
          <p className="text-lg font-semibold my-3">GitHub</p>
        </a>
        <a
          className="flex items-center ml-3"
          href="https://www.linkedin.com/in/elias-pedevilla-54ab1023a/"
        >
          <div className="text-2xl mx-3">
            <BsLinkedin />
          </div>
          <p className="text-lg font-semibold my-3">LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
