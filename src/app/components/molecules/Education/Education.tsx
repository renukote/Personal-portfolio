import Image from "next/image";
import { EducationCard } from "../../atoms/EducationCard/EducationCard";
import { educationData } from "@/app/data/educationData";
import { themeData } from "@/app/data/themeData";

export function Education() {
  const { theme } = themeData;

  return (
    <div className="min-h-[500px] w-full bg-secondary" id="resume">
      <div className="flex w-full flex-col place-items-center text-[hsa(117_56%_49%_0.702)] md:p-8 md:px-24 lg:flex-row xl:px-32">
        <div className="flex w-full flex-[0.65] flex-col items-start justify-start p-4 md:items-start">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-6xl">Education</h2>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="mt-4 box-border flex flex-[0.35] justify-end py-4">
          <Image src={theme.eduimg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
