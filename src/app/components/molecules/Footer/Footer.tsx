import { headerData } from "@/app/data/headerData";

export function Footer() {
  const getShortName = (name: string) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <footer className="footer h-full bg-secondary py-4">
      <p className="mx-auto h-full w-fit text-xl text-tertiary">
        Made with
        <span className=" font-semibold text-primary">{" ❤ "}</span>
        by {getShortName(headerData.name)}
      </p>
    </footer>
  );
}
