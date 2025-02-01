import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";
import Heading from "@/_components/ui/headings/heading";

import contactData from "@/_data/general-data.json";
import Image from "next/image";

const {
  contactDetails: { address },
} = contactData;

interface Props {
  cssClasses?: string;
}

const ContactInfo = ({ cssClasses }: Props) => {
  return (
    <main className={cssClasses}>
      <Heading cssClasses="tablet:col-span-2 desktop:col-span-1">
        Contact
      </Heading>
      <div className="py-10 grid gap-10 desktop:grid-cols-4 tablet:py-0 tablet:place-self-start">
        <div className="grid gap-5">
          <h3 className="text-white">General enquiries</h3>
          <ul className="grid gap-5 desktop:gap-2.5">
            <li>
              <ShowEmailAddress whiteText department="general" />
            </li>
            <li>
              <ShowPhoneNumber whiteText department="general" />
            </li>
          </ul>
        </div>
        <div className="grid gap-5">
          <h3 className="text-white">LNC Creative</h3>
          <ul className="grid gap-5 desktop:gap-2.5">
            <li>
              <ShowEmailAddress whiteText department="creative" />
            </li>
            <li>
              <ShowPhoneNumber whiteText department="creative" />
            </li>
          </ul>
        </div>
        <div className="grid gap-5">
          <h3 className="text-white">LNC Public Relations</h3>
          <ul className="grid gap-5 desktop:gap-2.5">
            <li>
              <ShowPhoneNumber whiteText department="general" />
            </li>
            <li>
              <ShowPhoneNumber whiteText department="publicRelations" />
            </li>
          </ul>
        </div>
        <div className="grid gap-5 place-content-start">
          <h3 className="text-white">Postal Address</h3>
          <address className="text-white">{address}</address>
        </div>
      </div>
      <div className="grid gap-10 h-full desktop:hidden">
        <Image
          src="/images/IMG_9761.jpg"
          alt="LNC team with purple balloons"
          width={800}
          height={800}
          sizes="(max-width: 800px) 100vw, 50vw"
          className="object-cover tablet:h-full aspect-video"
        />
        <Image
          src="/images/IMG_9681.jpg"
          alt="LNC team wearing hardhats"
          width={800}
          height={800}
          sizes="50vw"
          className="object-cover h-full aspect-video hidden tablet:block"
        />
      </div>
    </main>
  );
};

export default ContactInfo;
