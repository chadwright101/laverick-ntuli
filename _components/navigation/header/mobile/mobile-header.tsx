"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AlignLeft, X } from "lucide-react";

import ButtonLink from "@/_components/ui/buttons/button-link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

export interface HeaderProps {
  isScrolled: boolean;
}

export function MobileHeader({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={classNames(
        "relative flex w-full items-center justify-between px-5 py-4 tablet:px-10 desktop:hidden ease-in-out duration-300",
        {
          "py-2": isScrolled,
        }
      )}
    >
      <div className="flex gap-5 items-center">
        <Link href="/">
          <Image
            src="/images/logo/laverick-ntuli-communications-bulb-only.png"
            alt="Laverick Ntuli Communications Logo"
            width={60}
            height={60}
            priority
            className={classNames("ease-in-out duration-300 delay-100", {
              "w-10 h-auto": isScrolled,
            })}
          />
        </Link>
        <h1
          className={classNames(
            "hidden phone:grid text-[20px] font-extralight leading-[86%] tracking-[-0.01rem] ease-in-out duration-300",
            {
              "-translate-y-20": isScrolled,
            }
          )}
        >
          Laverick <span>Ntuli</span> <span>Communications</span>
        </h1>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple"
        aria-label="Open menu"
      >
        <AlignLeft color="#FFFFFF" className="h-10 w-10 p-2" />
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed inset-0 z-50 transform bg-purple transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex py-7 items-center justify-end px-5">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white"
            aria-label="Close menu"
          >
            <X color="#6939B6" className="h-9 w-9 p-1" />
          </button>
        </div>
        <nav className="px-6">
          <ul className="grid gap-6">
            {navData.map(({ title, url }, id) => {
              if (title !== "Contact Us") {
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-[24px] font-extralight p-2 -m-2 tracking-[-0.02rem]"
                    >
                      {title}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={id} className="place-self-start">
                    <ButtonLink
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      color="white"
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
    </div>
  );
}
