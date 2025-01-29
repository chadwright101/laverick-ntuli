import classNames from "classnames";
import Image from "next/image";

interface TeamProps {
  name: string;
  position: string;
  joinDate?: string;
  paragraphs: string[];
  priority?: boolean;
  image: string;
  border?: boolean;
  reverse?: boolean;
  teamIndex: number;
}

export default function TeamMember({
  name,
  position,
  joinDate,
  paragraphs,
  priority,
  image,
  border = true,
  reverse,
  teamIndex,
}: TeamProps) {
  return (
    <li
      className={classNames(
        "grid gap-5 min-[600px]:grid-cols-2 desktop:grid-cols-2",
        {
          "py-10 border-b border-grey/25  desktop:py-0 desktop:border-none":
            border,
          "pt-10 desktop:pt-0": !border,
          "min-[900px]:grid-cols-[1fr_2fr]": teamIndex % 2 === 0,
          "min-[900px]:grid-cols-[2fr_1fr]": teamIndex % 2 !== 0,
        }
      )}
    >
      <div
        className={classNames("grid gap-5 min-[600px]:place-self-start", {
          "min-[600px]:order-last desktop:order-none": !reverse,
        })}
      >
        <div>
          <h2
            className={classNames("text-paragraph text-white", {
              "desktop:text-right": teamIndex % 2 === 0,
            })}
          >
            {position}
          </h2>
          <h3
            className={classNames("text-subheadingLarge text-white", {
              "desktop:text-right": teamIndex % 2 === 0,
            })}
          >
            {name}
          </h3>
          <h4
            className={classNames("text-paragraph font-extralight text-white", {
              "desktop:text-right": teamIndex % 2 === 0,
            })}
          >
            {joinDate}
          </h4>
        </div>
        <div className="grid gap-4 min-[600px]:place-self-start">
          {paragraphs.map((item, index) => (
            <p
              key={index}
              className={classNames("text-white", {
                "desktop:text-right": teamIndex % 2 === 0,
              })}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={`${name} - ${position}`}
        className={classNames(
          "object-cover aspect-square object-top min-[600px]:aspect-auto min-[750px]:aspect-square desktop:aspect-auto",
          {
            "desktop:order-first": reverse,
          }
        )}
        priority={priority}
        width={800}
        height={1000}
        sizes="(max-width: 600px) 100vw, (max-width:600px) 50vw, (max-width: 900px) 30vw, 40vw"
      />
    </li>
  );
}
