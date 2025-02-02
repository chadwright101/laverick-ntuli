import { Metadata } from "next";

import TeamMember from "@/_components/pages/our-team/team-member";
import Heading from "@/_components/ui/headings/heading";

import teamData from "@/_data/general-data.json";

const { ourTeam } = teamData;

export const metadata: Metadata = {
  title: "Our Team - Laverick Ntuli Communications",
};

const OurTeam = () => {
  return (
    <main className="bg-darkGrey">
      <div className="max-w-[1280px] mx-auto py-15 px-5 tablet:px-10 desktop:grid gap-15">
        <Heading cssClasses="desktop:text-center" borderColor="text-grey/25">
          Our Team
        </Heading>
        <ul className="desktop:grid grid-cols-2 gap-10">
          {ourTeam.map((member, index) => (
            <TeamMember
              key={member.name}
              position={member.position}
              name={member.name}
              joinDate={member.joinDate}
              paragraphs={member.paragraphs}
              image={member.image}
              border={index !== ourTeam.length - 1}
              reverse={index % 2 !== 0}
              priority={index > 1}
              teamIndex={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default OurTeam;
