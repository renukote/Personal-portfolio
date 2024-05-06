import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  additionalClassNames?: string;
  variant?: "primary" | "secondary";
}

export function Button({ onClick, children, additionalClassNames, variant }: ButtonProps) {
  const buttonClasses = clsx(
    `h-12 w-32 rounded-3xl border-2 border-primary text-base font-medium font-semibold transition-all duration-200 hover:scale-125 md:w-40`,
    {
      "text-white hover:border-tertiary hover:bg-tertiary hover:text-secondary": variant === "primary",
      "border-primary bg-primary text-white hover:border-white hover:bg-secondary hover:text-white":
        variant === "secondary",
      additionalClassNames,
    },
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
