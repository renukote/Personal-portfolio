import { aboutData } from "../../../data/aboutData";
import Image from "next/image";
import { themeData } from "../../../data/themeData";

export function AboutMe() {
  const { theme } = themeData;

  return (
    <div
      className="max-w-screen relative -mt-24 flex h-full flex-col items-center bg-secondary p-4 sm:-mt-0"
      id="about"
    >
      <div className="absolute top-10 mx-auto flex h-12 w-full items-center justify-center gap-4 px-4 md:px-24 xl:px-32">
        <div className="h-1 w-1 rounded-[50%] bg-primary md:h-2.5 md:w-2.5"></div>
        <div className="h-1 w-1 rounded-[50%] bg-primary md:h-2.5 md:w-2.5"></div>
        <div className="h-1 w-1 flex-grow rounded-lg bg-primary md:h-2.5 md:w-full"></div>
      </div>

      <div className="flex h-fit w-full flex-col-reverse items-center justify-between gap-20 pt-32 md:px-24 lg:flex-row xl:px-32">
        <div className="flex h-fit w-full basis-2/3 flex-col items-start justify-evenly">
          <h2 className="mx-auto my-10 text-3xl font-semibold text-white sm:mx-0 md:text-5xl lg:text-6xl">
            {aboutData.title}
          </h2>
          <p className="text-sm text-tertiary80 md:text-xl">
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>

        <div>
          <Image
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
            className="w-[200px] basis-1/3 sm:w-[280px] md:w-[380px]"
          />
        </div>
      </div>
    </div>
  );
}
