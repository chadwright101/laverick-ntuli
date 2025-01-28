import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  cssClasses?: string;
  background?: "purple" | "transparent";
  borderColor?: string;
  textColor?: "white" | "black";
}

const Heading = ({
  children,
  cssClasses,
  background = "purple",
  borderColor = "border-grey",
  textColor = "white",
}: Props) => {
  return (
    <div
      className={classNames(
        "border-b desktop:border-none desktop:pb-0",
        {
          "pb-10": background === "purple",
          "pb-5": background !== "purple",
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
