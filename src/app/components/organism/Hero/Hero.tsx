import { headerData } from "../../../data/headerData";
import { socialsData } from "../../../data/socialsData";
import { Button } from "../../atoms/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

export function Hero() {
  return (
    <div className="max-w-screen flex h-screen flex-col sm:flex-row ">
      <div className="flex h-screen w-screen basis-1/3 items-end bg-primary bg-opacity-70 px-24 xl:px-32">
        {socialsData.linkedIn && (
          <Link
            href={socialsData.linkedIn.link}
            target="_blank"
            rel="noreferrer"
            className="hidden py-6 md:inline-block"
          >
            <Image
              src="/svg/social/linkedin.svg"
              className="text-5xl text-secondary hover:scale-125"
              aria-label="LinkedIn"
              alt="LinkedIn icon"
              width={40}
              height={40}
            />
          </Link>
        )}
      </div>

      <Image
        src={headerData.image}
        alt="Renuka's profile photo"
        className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full
		 border-8 border-primary border-opacity-70 bg-secondary object-cover shadow-lg shadow-purple-500 transition-all duration-300 hover:scale-110
		 sm:left-1/3 sm:top-1/2 sm:h-56 sm:w-56 md:left-1/3 md:top-1/2 md:h-72 md:w-72 lg:h-96 lg:w-96"
        priority
      />

      <div className="flex h-full w-full flex-1 flex-col justify-center bg-secondary px-4 lg:px-16">
        <div className="flex w-full flex-col items-center justify-center sm:items-end md:items-end xl:items-center">
          <div className="flex flex-col gap-4">
            <h1 className="ml-1 text-base font-medium md:text-2xl">{headerData.eyebrow}</h1>
            <h1 className="text-3xl font-semibold md:text-5xl lg:text-6xl">{headerData.name}</h1>
            <p className="text-lg text-purple-300 md:text-2xl lg:text-3xl">
              I am a
              <span className="ml-2">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Full Stack Developer",
                    "Next JS Developer",
                    "React Developer",
                    "MERN Stack Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  typeSpeed={50}
                  deleteSpeed={30}
                />
              </span>
            </p>

            <p className="text-base text-gray-300 md:text-xl">{headerData.description}</p>

            <div className="my-4 flex w-full justify-center gap-6 md:justify-start lg:gap-16">
              <Link href="/pdf/resume.pdf" download="Renuka Prasad Resume.pdf" target="_blank" rel="noreferrer">
                <Button additionalClassNames="mb-4 md:mb-0" variant="primary">
                  My Resume
                </Button>
              </Link>

              <Link href="#contacts">
                <Button variant="secondary">Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
