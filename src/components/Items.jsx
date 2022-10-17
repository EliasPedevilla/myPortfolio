import { BiRightArrow } from "react-icons/bi";

const Items = (props) => {
  return (
    <div className="flex mb-4">
      <div className=" mt-[6px] mx-3">
        <BiRightArrow />
      </div>
      <div className="">
        <h4 className=" text-lg font-medium ">{props.title}</h4>
        <p className=" text-base text-gray-600 ">{props.description}</p>
      </div>
    </div>
  );
};

export default Items;
