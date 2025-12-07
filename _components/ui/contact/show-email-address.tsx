"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import contactData from "@/_data/general-data.json";

export interface showContactProps {
  buttonClasses?: string;
  linkClasses?: string;
  spinnerColor?: "purple" | "white";
  smallText?: boolean;
  department: "creative" | "general" | "publicRelations";
  whiteText?: boolean;
}

const ShowEmailAddress = ({
  buttonClasses,
  linkClasses,
  spinnerColor = "purple",
  smallText,
  department = "general",
  whiteText,
}: showContactProps) => {
  const [showEmail, setShowEmail] = useState("Show email address");

  const handleShowEmailAddresses = () => {
    const emailAddress =
      contactData.contactDetails.emailAddresses[department] || "Email not found";
    setShowEmail(emailAddress);
  };

  if (showEmail === "Show email address") {
    return (
      <button
        onClick={handleShowEmailAddresses}
        className={classNames(
          "px-2 -mx-2 py-3 -my-3 hover:tablet:opacity-80 hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          buttonClasses
        )}
        aria-label="Show email address"
      >
        {showEmail}
      </button>
    );
  } else {
    return (
      <Link
        href={`mailto:${showEmail}`}
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
        {showEmail}
      </Link>
    );
  }
};

export default ShowEmailAddress;
