import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  cssClasses?: string;
  background?: "purple" | "transparent";
  border?: boolean;
  borderColor?: string;
  textColor?: "white" | "black";
}

const Heading = ({
  children,
  cssClasses,
  background = "purple",
  borderColor = "border-grey",
  textColor = "white",
  border = true,
}: Props) => {
  return (
    <div
      className={classNames(
        {
          "pb-10": background === "purple" && border,
          "pb-5": background !== "purple" && border,
          "border-b desktop:border-none desktop:pb-0": border,
        },
        cssClasses,
        borderColor
      )}
    >
      <div
        className={classNames({
          "bg-purple": background === "purple",
          "bg-transparent": background === "transparent",
        })}
      >
        <h2
          className={classNames("py-5 text-heading", {
            "px-5": background === "purple",
            "text-white": textColor === "white",
            "text-black": textColor === "black",
          })}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
