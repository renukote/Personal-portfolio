// import Link from "next/link";
import { projectsData } from "@/app/data/projectsData";
import { ProjectCard } from "../../atoms/ProjectCard/ProjectCard";
import { Fade } from "../../atoms/Fade/Fade";

export function Projects() {
  return (
    <>
      {projectsData.length > 0 && (
        <div className="flex min-h-[600px] w-full flex-col items-center justify-center bg-secondary">
          <Fade>
            <div className="mx-auto w-fit overflow-x-hidden md:p-8" id="projects">
              <div className="m-4 flex w-full place-items-center">
                <h2 className="mx-auto mb-10 w-fit text-3xl font-bold text-white md:text-6xl">Projects</h2>
              </div>
              <div className="flex w-full flex-col place-items-center">
                <div className="flex w-full flex-col flex-wrap gap-9 lg:flex-row lg:gap-4 xl:gap-12">
                  {projectsData.slice(0, 3).map((project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      name={project.projectName}
                      description={project.projectDesc}
                      tags={project.tags}
                      code={project.code}
                      demo={project.demo}
                      image={project.image}
                    />
                  ))}
                </div>

                {/* {projectsData.length > 3 && (
              <div className="w-full p-8 flex items-center justify-end mt-8">
                <Link href="#projects">
                  <button className="bg-primary text-tertiary transition-colors duration-200 hover:bg-primary hover:text-secondary">
                    View All
                    <HiArrowRight className="h-10 w-10 cursor-pointer rounded-full bg-secondary p-2 text-base text-tertiary transition-all hover:bg-secondary hover:text-tertiary" />
                  </button>
                </Link>
              </div>
            )} */}
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}
