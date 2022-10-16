import {
  BsFileEarmarkArrowDownFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full mb-40">
      <h2 className=" text-3xl font-semibold pt-9 ">Contactame!</h2>
      <div className="flex mt-3">
        <p className=" text-lg font-normal w-[600px] mr-20 ">
          Si deseas contactarte conmigo puedes hacerlo a travez de mi email a
          <span className="font-bold"> pedevillae@gmail.com</span> o via
          linkedin
        </p>
        <div className=" w-[40%] flex flex-col">
          <a
            className="flex items-center"
            href={"/CV.pdf"}
            target="blank"
            rel="noopener noreferrer"
            download="CV Elias Pedevilla - Backend Developer.pdf"
          >
            <div className="text-2xl mx-3">
              <BsFileEarmarkArrowDownFill />
            </div>
            <p className="text-lg font-bold my-3">Descarga mi CV</p>
          </a>
          <a
            className="flex items-center "
            href="https://github.com/EliasPedevilla"
          >
            <div className="text-2xl mx-3">
              <BsGithub />
            </div>
            <p className="text-lg font-bold my-3">GitHub</p>
          </a>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/elias-pedevilla-54ab1023a/"
          >
            <div className="text-2xl mx-3">
              <BsLinkedin />
            </div>
            <p className="text-lg font-bold my-3">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
