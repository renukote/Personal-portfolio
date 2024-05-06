import React from "react";
import Image from "next/image";
import Link from "next/link";
import { skillsImage } from "@/app/utils/skillsImage";

interface ProjectCardProps {
  id: number;
  name: string;
  description: {
    intro: string;
    responsibilities: string[];
  };
  tags: string[];
  code: string;
  demo: string;
  image: string;
}

export function ProjectCard({ id, name, description, tags, code, demo, image }: ProjectCardProps) {
  return (
    <div
      key={id}
      className="group relative flex h-[400px] w-[320px] flex-col place-items-center overflow-hidden
	   rounded-xl bg-primary400 px-4 py-6 md:flex-row xl:w-[350px]"
    >
      <div className="flex h-full w-full flex-col justify-between">
        <h3 id={name.replace(" ", "-").toLowerCase()} className="text-center text-xl font-semibold text-tertiary">
          {name}
        </h3>
        <Image
          src={image ? image : "/png/placeholder.png"}
          alt={name}
          className="aspect-auto h-3/5 w-full rounded-xl transition-all duration-500 group-hover:opacity-0"
          width={100}
          height={100}
        />
        <div className="group flex w-full items-center justify-between">
          <Link
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 transform justify-center rounded-full border-2 border-tertiary text-tertiary
			 transition-all duration-300 hover:scale-110 hover:border-secondary hover:bg-secondary hover:text-primary"
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name.replace(" ", "-").toLowerCase()}-demo`}
          >
            <Image
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              className="text-base transition-all duration-200 hover:fill-primary"
              aria-label="Demo"
              src="/svg/projects/play.svg"
              alt="View project button"
              width={20}
              height={20}
            />
          </Link>

          {!!code && (
            <Link
              href={code}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-tertiary text-tertiary transition-all
			 duration-500 hover:scale-110 hover:border-secondary hover:bg-secondary hover:text-primary group-hover:-translate-x-36"
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name.replace(" ", "-").toLowerCase()}-code`}
            >
              <Image
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className="text-base transition-all duration-200 hover:text-primary"
                aria-label="Demo"
                src="/svg/projects/code.svg"
                alt="View code button"
                width={20}
                height={20}
              />
            </Link>
          )}

          <div
            className="absolute bottom-5 right-0 flex w-36 translate-x-full transform justify-evenly gap-2 rounded-bl-xl rounded-tl-xl
			bg-secondary p-3 text-sm text-tertiary80 duration-500 group-hover:translate-x-0"
          >
            {tags.map((tag, id) => (
              <Image src={skillsImage(tag)} alt={tag} width={30} height={30} key={id} className="aspect-square h-8" />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute left-0 top-10 flex h-fit w-[95%] -translate-x-full translate-y-5 transform flex-col gap-8
		 rounded-3xl rounded-bl-none rounded-tl-none bg-secondary p-4 text-tertiary80 transition-all duration-500 group-hover:translate-x-0"
      >
        {
          <span key={"desc0"} className="break-words font-medium">
            {description.intro}
          </span>
        }
        {
          <span key="desc1" className="break-words font-medium">
            Roles and responsibilities:
            <ul className="my-1">
              {description.responsibilities.map((role, id) => {
                return <li key={id}>{role}</li>;
              })}
            </ul>
          </span>
        }
      </div>
    </div>
  );
}
