"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import { fetchEmailAddress } from "@/_actions/contact-actions";

export interface showContactProps {
  buttonClasses?: string;
  linkClasses?: string;
  spinnerColor?: "purple" | "white";
  smallText?: boolean;
}

const ShowEmailAddress = ({
  buttonClasses,
  linkClasses,
  spinnerColor = "purple",
  smallText,
}: showContactProps) => {
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    const emailAddress = await fetchEmailAddress();
    setShowEmail(emailAddress);
    setShowSpinnerEmail(false);
  };

  if (showEmail === "Show email address") {
    return (
      <button
        onClick={handleShowEmailAddress}
        className={classNames(
          "py-3 px-2 -my-3 -mx-2 hover:tablet:text-pink hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
          },
          buttonClasses
        )}
        aria-label="Show email address"
      >
        {showSpinnerEmail ? (
          <div
            className={classNames({
              "spinner-purple": spinnerColor === "purple",
              "spinner-white": spinnerColor === "white",
            })}
          ></div>
        ) : (
          showEmail
        )}
      </button>
    );
  } else {
    return (
      <Link
        href={`mailto:${showEmail}`}
        className={classNames(
          "tablet:hover:text-pink",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
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
