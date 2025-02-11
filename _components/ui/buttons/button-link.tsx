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
  ariaLabel: string;
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
      "desktop:hover:bg-white desktop:hover:text-black desktop:hover:outline-purple desktop:hover:outline desktop:hover:outline-1":
        color === "purple" && !disabled && !pending,
      "bg-white text-purple ": color === "white",
      "desktop:hover:bg-purple desktop:hover:text-white desktop:hover:outline-white desktop:hover:outline desktop:hover:outline-1":
        color === "white" && !disabled && !pending,
      "opacity-50 pointer-events-none": pending,
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
  disabled,
  ariaLabel,
}: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, padding, disabled)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
