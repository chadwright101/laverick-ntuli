import classNames from "classnames";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "white" | "purple";
  href: string;
  padding?: string;
  disabled?: boolean;
}

export const buttonStyles = (
  color: string,
  cssClasses?: string,
  padding?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex justify-center font-bold tracking-[-0.02rem] rounded-[6px] uppercase duration-500 text-center",
    cssClasses,
    padding,
    {
      "bg-purple text-white": color === "purple",
      "bg-white text-black outline-purple outline outline-1":
        color === "purple" && pending,
      "desktop:hover:bg-white desktop:hover:text-black desktop:hover:outline-purple desktop:hover:outline desktop:hover:outline-1":
        color === "purple" && !disabled,
      "bg-white text-purple ": color === "white",
      "desktop:hover:bg-purple desktop:hover:text-white desktop:hover:outline-white desktop:hover:outline desktop:hover:outline-1":
        color === "white" && !disabled,
      "py-[10px] px-5": !padding,
      "py-[11px] px-5": !padding && pending,
    }
  );

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  color = "purple",
  href,
  padding,
  disabled,
}: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, padding, disabled)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
