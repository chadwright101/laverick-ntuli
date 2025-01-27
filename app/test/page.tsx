"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getTestVariable } from "../../_actions/actions";

const Test = () => {
  const [showTestVairable, setShowTestVariable] = useState("No Test Variable");
  const [testVariable, setTestVariable] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getTestVariable()) ?? "Default Test Variable";
      setTestVariable(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          if (testVariable) {
            setShowTestVariable(testVariable);
          }
        }}
      >
        {showTestVairable}
      </button>
      <Image
        src="/images/logo/laverick-ntuli-communications-bulb-only.png"
        alt="Laverick Ntuli Communications Logo"
        width={100}
        height={100}
      />
      <Image
        src="/images/logo/laverick-ntuli-communications-bulb-only.png"
        alt="Laverick Ntuli Communications Logo"
        width={400}
        height={400}
      />
      <Image
        src="/images/logo/laverick-ntuli-communications-bulb-only.png"
        alt="Laverick Ntuli Communications Logo"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Test;
