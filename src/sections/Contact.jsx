import { FiArrowUpRight } from "react-icons/fi";
import ButtonWhite from "../components/ButtonWhite";
import ButtonDark from "../components/ButtonDark";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full mt-20 mb-40 h-[50vh]"
    >
      <h2 className=" text-3xl font-semibold pt-9 ">¡Contactame!</h2>
      <div className="w-[250px] mt-12">
        <ButtonDark href="mailto:pedevillae@gmail.com">
          <p className="mr-3 text-base font-semibold ">Enviame un mail</p>
          <FiArrowUpRight />
        </ButtonDark>
        <ButtonWhite href="https://api.whatsapp.com/send?phone=542664171152">
          <p className="mr-3 text-base font-semibold ">Escribime a WhatsApp</p>
          <FiArrowUpRight />
        </ButtonWhite>
      </div>
    </section>
  );
};

export default Contact;
