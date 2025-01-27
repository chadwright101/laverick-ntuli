import classNames from "classnames";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "white" | "purple";
  href: string;
  padding?: string;
}

export const buttonStyles = (
  color: string,
  cssClasses?: string,
  padding?: string
) =>
  classNames(
    "flex justify-center font-bold tracking-tight rounded-[6px] uppercase duration-200",
    cssClasses,
    padding,
    {
      "bg-purple text-white desktop:hover:bg-white desktop:hover:text-black desktop:hover:outline-purple desktop:hover:outline desktop:hover:outline-1":
        color === "purple",
      "bg-white text-purple desktop:hover:bg-purple desktop:hover:text-white desktop:hover:outline-white desktop:hover:outline desktop:hover:outline-1":
        color === "white",
      "py-[10px] px-5": !padding,
    }
  );

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  color = "purple",
  href,
  padding,
}: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, padding)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
