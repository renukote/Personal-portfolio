import Image from "next/image";
import { Fade } from "../Fade/Fade";

interface EducationCardProps {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}

export function EducationCard({ id, institution, course, startYear, endYear }: EducationCardProps) {
  return (
    <Fade>
      <div className="w-full">
        <div
          key={id}
          className="mb-6 flex h-32 min-h-min w-full items-start justify-start rounded-3xl
		 bg-primary50 p-3 transition duration-200 ease-in-out hover:bg-primary400 md:w-10/12 md:p-6"
        >
          <div className="flex min-h-16 min-w-16 items-center justify-center rounded-full border-2 border-white bg-primary400 md:h-20 md:w-20">
            <Image src="/svg/education/eduImgBlack.svg" alt="" className="h-10 w-10" width={10} height={10} />
          </div>

          <div className="ml-2 md:ml-8">
            <b className="mb-2 text-sm font-bold">
              {startYear}-{endYear}
            </b>
            <p className="text-base font-semibold text-tertiary md:text-xl">{course}</p>
            <p className="color-tertiary80 text-sm font-semibold md:text-lg">{institution}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
