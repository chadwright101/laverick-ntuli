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

const SubmitButton = ({
  children,
  onClick,
  cssClasses,
  color = "purple",
  padding,
  type = "submit",
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, padding)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
