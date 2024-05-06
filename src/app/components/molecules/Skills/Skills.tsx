import Marquee from "react-fast-marquee";
import { skillsData } from "../../../data/skillsData";
import { skillsImage } from "../../../utils/skillsImage";
import Image from "next/image";

export function Skills() {
  return (
    <div className="flex min-h-fit flex-col items-center justify-start bg-secondary py-20 md:px-24 xl:px-32">
      <div className="flex items-center justify-center">
        <h2 className="text-center text-3xl font-bold text-white md:text-6xl">Skills</h2>
      </div>
      <div className="mt-12 flex w-full items-center justify-center px-4">
        <div className="w-full">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                className="m-6 flex h-[120px] w-[120px] transform flex-col place-items-center rounded-xl bg-secondary px-4 py-8 shadow-[0px_0px_30px_#823ae04d] transition duration-300 ease-in-out hover:scale-125 md:h-[160px] md:w-[160px]"
                key={id}
              >
                <Image
                  src={skillsImage(skill)}
                  alt={skill}
                  className="pointer-events-none aspect-video h-8 w-8 md:h-12 md:w-12"
                />
                <p className="font-2xl mt-4 text-center font-medium text-tertiary">{skill}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
