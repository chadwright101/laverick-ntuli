"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import contactData from "@/_data/general-data.json";

import { showContactProps } from "./show-email-address";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
  spinnerColor = "purple",
  smallText,
  department,
  whiteText,
}: showContactProps) => {
  const [showPhone, setShowPhone] = useState("Show phone number");

  const handleShowPhoneNumbers = () => {
    const phoneNumber =
      contactData.contactDetails.phoneNumbers[department] || "Phone number not found";
    setShowPhone(phoneNumber);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumbers}
        className={classNames(
          "px-2 -mx-2 py-3 -my-3 hover:tablet:opacity-80 hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          buttonClasses
        )}
        aria-label="Show phone number"
      >
        {showPhone}
      </button>
    );
  } else {
    return (
      <Link
        href={`tel:${showPhone}`}
        className={classNames(
          "py-3 px-2 -my-3 -mx-2 tablet:hover:opacity-80 tablet:p-0 tablet:m-0",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          linkClasses
        )}
      >
        {showPhone}
      </Link>
    );
  }
};

export default ShowPhoneNumber;
