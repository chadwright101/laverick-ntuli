import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/_components/ui/buttons/button-link";

import navData from "@/_data/nav-data.json";

export function DesktopHeader() {
  return (
    <div className="hidden py-4 px-10 items-end justify-between desktop:flex">
      <div className="flex gap-5 items-center">
        <Link href="/">
          <Image
            src="/images/logo/laverick-ntuli-communications-bulb-only.png"
            alt="Laverick Ntuli Communications Logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        <h1 className="hidden phone:grid text-[20px] font-extralight leading-[86%] tracking-[-0.01rem]">
          Laverick <span>Ntuli</span> <span>Communications</span>
        </h1>
      </div>
      <nav>
        <ul className="flex gap-3 items-center">
          {navData.map(({ title, url }, id) => {
            if (title !== "Contact Us") {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="font-light tracking-[-0.01rem] ease-in-out duration-200 hover:text-purple"
                  >
                    {title}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={id}>
                  <ButtonLink
                    href="/contact"
                    cssClasses="font-light normal-case tracking-[-0.01rem]"
                    padding="px-2 py-1"
                    ariaLabel="Contact Us"
                  >
                    Contact Us
                  </ButtonLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
}
