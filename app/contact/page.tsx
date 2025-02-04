"use client";

import Image from "next/image";
import { useState } from "react";

import ContactForm from "@/_components/pages/contact/contact-form";
import ContactInfo from "@/_components/pages/contact/contact-info";
import classNames from "classnames";

const Contact = () => {
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <div className="pt-15 px-5 tablet:px-10 bg-darkGrey max-w-[1280px] mx-auto grid gap-10 desktop:pb-10">
        <ContactInfo cssClasses="tablet:grid grid-cols-2 gap-10 desktop:grid-cols-1" />
        <div className="px-5 desktop:px-0 desktop:grid grid-cols-2 gap-10">
          <div className="bg-white -mx-10 py-10 px-5 tablet:mx-0 tablet:bg-transparent tablet:px-0 desktop:py-0">
            <ContactForm
              showEmailSubmitted={showEmailSubmitted}
              setShowEmailSubmitted={setShowEmailSubmitted}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              cssClasses="bg-grey px-5 py-10 tablet:p-10"
            />
          </div>
          <div className="hidden desktop:grid gap-10 h-full">
            <Image
              src="/images/IMG_9681.jpg"
              alt="LNC team wearing hardhats"
              width={800}
              height={800}
              sizes="50vw"
              className="object-cover h-full"
            />
            <Image
              src="/images/IMG_9761.jpg"
              alt="LNC team with purple balloons"
              width={800}
              height={800}
              sizes="50vw"
              className={classNames("object-cover h-full", {
                "desktop:hidden": !showMessage || showEmailSubmitted,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
