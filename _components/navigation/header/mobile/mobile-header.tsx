"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AlignLeft, X } from "lucide-react";

import ButtonLink from "@/_utils/button-link";

import navData from "@/_data/nav-data.json";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex w-full items-center justify-between p-4 desktop:hidden">
      <div className="flex gap-5 items-center">
        <Link href="/">
          <Image
            src="/images/logo/laverick-ntuli-communications-bulb-only.png"
            alt="Laverick Ntuli Communications Logo"
            width={55}
            height={60}
            priority
          />
        </Link>
        <h1 className="hidden phone:grid text-[20px] font-extralight leading-[86%] tracking-[-0.01rem]">
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
              if (title !== "Press Releases") {
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
                      href="/press-releases"
                      onClick={() => setIsOpen(false)}
                      color="white"
                    >
                      Press Releases
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
