import { FiArrowRight } from "react-icons/fi";

const Items = (props) => {
  return (
    <div className="flex mb-5">
      <div className=" text-xl mt-[6px] mx-3">
        <FiArrowRight />
      </div>
      <div className="">
        <h4 className=" text-lg font-normal ">{props.title}</h4>
        <p className=" text-sm font-normal text-gray-600 ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Items;
