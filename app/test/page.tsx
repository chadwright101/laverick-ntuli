"use client";

import Image from "next/image";
import { useState } from "react";
import { getTestVariable } from "../../_actions/actions";

const Test = () => {
  const [showTestVairable, setShowTestVariable] =
    useState("Show Test Variable");

  const handleClick = async () => {
    const data = (await getTestVariable()) ?? "Default Test Variable";
    setShowTestVariable(data);
  };

  return (
    <div>
      <button onClick={handleClick}>{showTestVairable}</button>
      <Image
        src="/images/logo/laverick-ntuli-communications-bulb-only.png"
        alt="Laverick Ntuli Communications Logo"
        width={1100}
        height={1100}
        className="w-[425px] tablet:w-[800px] desktop:w-full max-w-[1100px]"
        sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1280px"
      />
    </div>
  );
};

export default Test;
