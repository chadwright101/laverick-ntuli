import { useFormStatus } from "react-dom";

import { buttonStyles } from "./button-link";

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
      className={buttonStyles(color, cssClasses, padding, disabled, pending)}
      disabled={disabled}
    >
      {pending ? <div className="spinner-purple"></div> : <>{children}</>}
    </button>
  );
};

export default ButtonType;
