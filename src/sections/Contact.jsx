import {
  BsFileEarmarkArrowDownFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import ButtonWhite from "../components/ButtonWhite";
import ButtonDark from "../components/ButtonDark";

const Contact = () => {
  return (
    <div className=" box-border ">
      <div
        className="flex flex-col items-center w-full mt-20 mb-40"
        id="contact"
      >
        <h2 className=" text-3xl font-semibold pt-9 ">Contactame!</h2>
        <div className="w-[250px] mt-12">
          <ButtonDark href="mailto:pedevillae@gmail.com">
            <p className="mr-3 text-base font-semibold ">Enviame un mail</p>
            <FiArrowUpRight />
          </ButtonDark>
          <ButtonWhite href="api.whatsapp.com/send?phone=542664171152">
            <p className="mr-3 text-base font-semibold ">
              Escribime a WhatsApp
            </p>
            <FiArrowUpRight />
          </ButtonWhite>
        </div>
        <div className="flex mt-[120px] ">
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
            <p className="text-lg font-bold my-3">Mi CV</p>
          </a>
          <a
            className="flex items-center "
            href="https://github.com/EliasPedevilla"
          >
            <div className="text-2xl mx-3">
              <BsGithub />
            </div>
          </a>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/elias-pedevilla-54ab1023a/"
          >
            <div className="text-2xl mx-3">
              <BsLinkedin />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
