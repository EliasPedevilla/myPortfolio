import SkillCard from "../components/SkillCard";
import data from "../data.json";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center" id="aboutMe">
      <h2 className=" text-3xl font-semibold pt-9 ">Sobre mi</h2>
      <section>
        <p className="max-w-[800px] text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          reiciendis qui asperiores iste ipsam quae. Error consequuntur eius
          doloremque vel. reiciendis qui asperiores iste ipsam quae. Error
          consequuntur eius doloremque vel.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2 className=" text-3xl font-semibold pt-9 ">Skils</h2>
        <div className="grid grid-cols-5 gap-8 mt-3 mb-11">
          {data.skils.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                name={skill.name}
                iconPath={skill.iconPath}
                bgColor={skill.bgColor}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
