import { blogData } from "@/app/data/blogData";
// import Link from "next/link";
import { BlogCard } from "../../atoms/BlogCard/BlogCard";
import { Fade } from "../../atoms/Fade/Fade";

export function Blog() {
  return (
    <>
      {blogData.length > 0 && (
        <div className="flex min-h-[600px] w-full flex-col items-center justify-center bg-secondary">
          <Fade>
            <div className="mx-auto w-fit overflow-x-hidden md:p-8" id="blog">
              <div className="m-4 flex w-full place-items-center">
                <h1 className="mx-auto mb-10 w-fit text-3xl font-bold text-white md:text-6xl">Blogs</h1>
              </div>
              <div className="flex w-full flex-col place-items-center">
                <div className="flex w-full flex-col flex-wrap gap-8 lg:flex-row lg:gap-4 xl:gap-12">
                  {blogData.slice(0, 3).map((blog) => (
                    <BlogCard
                      title={blog.title}
                      description={blog.description}
                      date={blog.date}
                      image={blog.image}
                      url={blog.url}
                      key={blog.id}
                      id={blog.id}
                    />
                  ))}
                </div>

                {/* {blogData.length > 3 && (
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
