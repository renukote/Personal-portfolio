import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  id: number;
}

export function BlogCard({ title, description, date, image, url, id }: BlogCardProps) {
  return (
    <Link
      className="w-[320px] h-[400px] min-h-fit rounded-md bg-primary400 xl:w-[350px]"
      key={id}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="h-1/2 w-full overflow-hidden rounded-md bg-secondary">
        <Image
          src={image ? image : "/png/placeholder"}
          alt={title}
          width={200}
          height={200}
          className="h-full w-full scale-125 rounded-t-md object-cover blur-[2px] transition-all duration-200 hover:scale-100 hover:blur-none"
        />
      </div>

      <div className="p-4">
        <p className="font-xs mb-3 font-semibold text-tertiary">{date}</p>
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <h6 className="text-base font-medium text-white opacity-90">{description}</h6>
      </div>
    </Link>
  );
}
