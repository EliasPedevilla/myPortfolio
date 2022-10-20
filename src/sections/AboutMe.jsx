import SkillCard from "../components/SkillCard";
import data from "../data.json";
import Items from "../components/Items";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12" id="aboutMe">
      <h2 className=" text-3xl font-semibold pt-9 ">Sobre mi</h2>
      <section>
        <p className="max-w-[800px] text-center mt-3">
          Soy desarrollador web backend con NodeJS como tecnologia de cabecera.
          Creo soluciones de calidad, buscando productos escalables de gran
          valor para su empresa o startup.
        </p>
      </section>
      <section className="flex mt-11">
        <div className="flex flex-col items-center py-10 px-12 mx-3 bg-gray-300 w-[400px] rounded-lg shadow-xl ">
          <h3 className="text-2xl">Educacion</h3>
          <div className="mt-3">
            {data.education.map((course) => {
              return (
                <Items
                  title={course.title}
                  description={course.description}
                  key={course.id}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center py-10 px-12 mx-3 bg-gray-300 w-[400px] rounded-lg shadow-xl ">
          <h3 className="text-2xl">Experiencia laboral</h3>
          <div className="mt-3">
            {data.workExperience.map((course) => {
              return (
                <Items
                  title={course.title}
                  description={course.description}
                  key={course.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-12">
        <h2 className=" text-3xl font-semibold pt-9 ">Skills</h2>
        <div className="grid grid-cols-5 gap-8 mt-3 mb-11">
          {data.skills.map((skill) => {
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
