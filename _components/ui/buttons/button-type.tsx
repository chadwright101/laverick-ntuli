import { useFormStatus } from "react-dom";

import { buttonStyles } from "./button-link";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "white" | "purple";
  padding?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const ButtonType = ({
  children,
  onClick,
  cssClasses,
  color = "purple",
  padding,
  type = "submit",
  disabled = false,
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        buttonStyles(color, cssClasses, padding, disabled, pending),
        {
          "opacity-50 desktop:cursor-not-allowed desktop:hover:none": pending,
        }
      )}
      disabled={disabled || pending}
    >
      {pending ? (
        <div className="py-[3px]">
          <div className="spinner-white"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default ButtonType;
