const ButtonDark = (props) => {
  return (
    <a
      className="flex items-center justify-center rounded-lg mt-4 px-3 h-11 bg-gray-900 border border-white text-white w-full"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default ButtonDark;
