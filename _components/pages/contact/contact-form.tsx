"use client";

import Recaptcha from "@/_lib/recaptcha";
import { sendEmail } from "@/_actions/send-email-actions";

import ButtonType from "@/_components/ui/buttons/button-type";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";

interface Props {
  cssClasses?: string;
  showEmailSubmitted: boolean;
  setShowEmailSubmitted: (showEmailSubmitted: boolean) => void;
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
}

export default function ContactForm({
  cssClasses,
  showEmailSubmitted,
  showMessage,
  setShowEmailSubmitted,
  setShowMessage,
}: Props) {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(true);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: string | null) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div className={cssClasses} id="contact">
      {showEmailSubmitted ? (
        <p className="text-subheadingSmall italic tablet:text-left">
          Your email has been sent, we will be in touch soon.
        </p>
      ) : (
        <>
          <h2 className="text-subheadingLarge mb-8">Get in touch</h2>
          <form
            action={async (formData) => {
              await sendEmail(formData);
              setShowEmailSubmitted(true);
            }}
            className="grid gap-10 desktop:gap-5"
          >
            <div className="grid gap-2">
              <label className="text-subheadingSmall">Name*</label>
              <input
                name="name"
                required
                placeholder="Name"
                className="h-10 px-3 rounded-[6px] border border-darkGrey text-paragraph"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-subheadingSmall">Email*</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-10 px-3 rounded-[6px] border border-darkGrey text-paragraph"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-subheadingSmall">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="h-10 px-3 rounded-[6px] border border-darkGrey text-paragraph"
              />
            </div>
            {showMessage && (
              <>
                <div className="grid gap-2">
                  <label className="text-subheadingSmall">Department</label>
                  <div className="relative">
                    <select
                      name="department"
                      required
                      defaultValue="general"
                      className="h-10 w-full px-3 pr-8 rounded-[6px] border border-darkGrey text-paragraph appearance-none"
                    >
                      <option value="general">General enquiry</option>
                      <option value="creative">LNC Creative</option>
                      <option value="publicRelations">
                        LNC Public Relations
                      </option>
                    </select>
                    <ChevronDown
                      color="#181818"
                      className="absolute right-3 top-[9px] pointer-events-none"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-subheadingSmall">Your message</label>
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    className="min-h-[180px] rounded-[6px] border border-darkGrey text-paragraph py-3 px-3"
                  />
                </div>
              </>
            )}
            {showMessage ? (
              <>
                <ButtonType
                  cssClasses={classNames("w-full", {
                    "opacity-50 desktop:cursor-not-allowed desktop:hover:none":
                      !validateRecaptcha,
                    "hover:desktop:opacity-90": validateRecaptcha,
                  })}
                  disabled={!validateRecaptcha}
                >
                  Submit
                </ButtonType>
                {!validateRecaptcha && (
                  <Recaptcha onChange={handleRecaptchaChange} />
                )}
              </>
            ) : (
              <ButtonType
                cssClasses="w-full"
                onClick={() => setShowMessage(true)}
              >
                Next
              </ButtonType>
            )}
          </form>
        </>
      )}
    </div>
  );
}
