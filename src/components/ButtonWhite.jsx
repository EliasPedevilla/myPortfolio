const ButtonWhite = (props) => {
  return (
    <a
      className="flex items-center justify-center rounded-lg p-[10px] mt-4 h-11 bg-white border border-gray-900 text-gray-900 w-full"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default ButtonWhite;
