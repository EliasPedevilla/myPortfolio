import ProjectCard from "../components/ProjectCard";
import data from "../data.json";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center" id="projects">
      <h2 className=" text-3xl font-semibold pt-9 ">Proyectos</h2>
      <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-11 pt-11 ">
        {data.projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              ghLink={project.ghLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
