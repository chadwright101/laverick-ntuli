"use client";

import Image from "next/image";
import Heading from "@/_components/ui/headings/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_shadcn/components/ui/accordion";

export default function OurHistory() {
  return (
    <section
      className="w-full max-w-[1280px] mx-auto grid gap-10 bg-black pt-15 pb-10 px-5 tablet:px-10 desktop:grid-cols-2"
      id="our-history"
    >
      <Image
        src="/images/IMG_9580.jpg"
        alt="Team members in white shirts and hard hats"
        width={1280}
        height={800}
        className="object-cover aspect-[5/3] desktop:aspect-auto desktop:h-full"
      />
      <Heading
        background="transparent"
        borderColor="border-grey/25"
        cssClasses="desktop:col-span-2 tablet:order-first"
      >
        Our History
      </Heading>

      <Accordion
        type="single"
        collapsible
        className="bg-grey"
        defaultValue="item-2"
      >
        <AccordionItem value="item-1" className="border-b border-darkGrey/25">
          <AccordionTrigger className="text-subheadingSmall hover:text-purple w-full p-4">
            How did it all start?
          </AccordionTrigger>
          <AccordionContent className="max-h-[375px] overflow-y-auto p-4 border-t border-darkGrey/25 tablet:max-h-[400px] desktop:max-h-[325px]">
            <div className="space-y-6 text-paragraph">
              <p>
                Laverick Media Communications was established by Sonia, Aletta
                (Sonia's mom) and Thembekile (business partner) in 1998 to bring
                B2B Public Relations services to clients in mining and general
                industry. We soon realised that for PR campaigns to achieve
                maximum effect, demands the support of a good advertising
                campaign to ensure that a common message is shared with the
                target audiences. So in the early nineties, we added our
                advertising to our portfolio and Wilson was appointed as
                Advertising Manager. Graphic design, originally outsourced, was
                introduced as an in-house function 11 years ago, spearheaded by
                Melissa.
              </p>
              <p>
                This has become our differentiating factor because we are one of
                very few agencies that offer both PR and advertising services.
              </p>
              <h3 className="text-subheadingSmall font-normal">
                No email or www? WHAAAT?
              </h3>
              <p>
                In 1998 we had computers (no laptops mind you) and fax machines.
                So this is how a press release made it into a B2B magazine:
                Sonia would visit a client and take a brief; return to the
                office and write the press release; take a print copy back to
                client for review. Client would make changes on the print copy
                (keeping photo copyist for their records) and Sonia, once back
                in the office, would make the changes, drive back to the client
                with a print copy of the amended version for final approval and
                signature.
              </p>
              <p>
                Client would keep a copy. Client would also, during this
                process, supply a colour transparency (tranny). We partnered
                with a photographic company who would send a driver on a scooter
                to collect the tranny, having been given instructions to produce
                X number of colour prints. Prints now received, Thembi would
                print out X number of press releases, collate and staple. Thembi
                would type photo captions on sticky labels which were stuck to
                the back of the photos. A photo would then be paper clipped to
                the back of each press release, taking care not to scratch the
                photo as this scratch will appear in the final published
                version.
              </p>
              <p>
                Still not finished! Sonia, Thembi or Aletta would pay a visit to
                the post office, buy X number of stamps and well, the rest is
                kinda obvious! Turnaround time for a press release from creation
                to publishing – one to two months! But it worked!
              </p>
              <p>
                How things have changed. A brief is taken via an online meeting.
                A press release is approved via email. The press release
                accompanied by a digital image is emailed to media groupings
                relevant to the customer and press release contents. The press
                release is published on line within a matter of hours.
                Turnaround time – a few days!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-grey">
          <AccordionTrigger className="text-subheadingSmall hover:text-purple w-full p-4">
            Who we are today
          </AccordionTrigger>
          <AccordionContent className="max-h-[400px] overflow-y-auto p-4 border-t border-darkGrey/25 tablet:max-h-[375px] desktop:max-h-[325px]">
            <div className="space-y-6 text-paragraph text-white">
              <p>
                We have remained flexible and dynamic, changing with latest
                global trends and embracing the latest innovations and digital
                technologies. This includes all marketing services focused
                across all social media platforms. We also establish and
                maintain solid long-term relationships with our media partners.
                This has enabled the LNC team to offer clients the best digital
                packages available in our B2B media space.
              </p>
              <p>
                Olivia, who joined LMC 15 years ago as receptionists and admin
                clerk, has a very different role today. Her skill sets now
                include being a specialist in media monitoring to source online
                and digital links for clients' online press releases, banners
                and digital adverts. Olivia also takes care of stats and
                analytics.
              </p>
              <p>
                Morgan joined us 18 years ago, boosting our marketing arsenal
                with professional photography and videography services. Morgan
                is also our Social Media Marketing Specialist.
              </p>
              <p>
                Most importantly, the team has years of experience and we are
                passionate in what we do. We are a full-on digital PR and
                Advertising agency offering professional and premium class
                services, often below going market rates, and delivering these
                services in a personal manner. We are extremely proud of the
                fact that many of our clients have been with us for close on 20
                years.
              </p>
              <p>
                Most importantly, the team has years of experience and we are
                passionate in what we do. We are a full-on digital PR and
                Advertising agency offering professional and premium class
                services, often below going market rates, and delivering these
                services in a personal manner. We are extremely proud of the
                fact that many of our clients have been with us for close on 25
                years.
              </p>
              <p>
                We continue to evolve, making sure that we are up to date with
                the latest that the digital marketing world and social media
                platforms have to offer. We are also on top of our game when it
                comes to the Who's who in the media – new journals, new editors,
                etc.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
