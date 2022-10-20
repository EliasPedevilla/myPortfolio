const SkillCard = (props) => {
  return (
    <div className="flex flex-col items-center " key={props.id}>
      <div
        className={`flex p-2 mb-2 rounded-lg border shadow-sm ${props.bgColor} `}
      >
        <img className="h-16 w-16" src={props.iconPath} alt={props.name} />
      </div>
      <p className="text-base font-normal">{props.name}</p>
    </div>
  );
};

export default SkillCard;
