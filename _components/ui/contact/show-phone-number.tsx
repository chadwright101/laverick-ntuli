"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import { fetchPhoneNumber } from "@/_actions/contact-actions";

import { showContactProps } from "./show-email-address";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
  spinnerColor,
  smallText,
}: showContactProps) => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerEmail(true);
    const emailAddress = await fetchPhoneNumber();
    setShowPhone(emailAddress);
    setShowSpinnerEmail(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumber}
        className={classNames(
          "py-3 px-2 -my-3 -mx-2 hover:tablet:text-pink hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
          },
          buttonClasses
        )}
        aria-label="Show phone number"
      >
        {showSpinnerEmail ? (
          <div
            className={classNames({
              "spinner-purple": spinnerColor === "purple",
              "spinner-white": spinnerColor === "white",
            })}
          ></div>
        ) : (
          showPhone
        )}
      </button>
    );
  } else {
    return (
      <Link
        href={`tell:${showPhone}`}
        className={classNames(
          "tablet:hover:text-pink",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
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
