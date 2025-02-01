import ButtonLink from "@/_components/ui/buttons/button-link";

export default function FlexibleDynamicSection() {
  return (
    <main className="flex flex-col max-w-[1280px] mx-auto px-5 pt-10 pb-15 gap-10 bg-darkGrey tablet:grid tablet:grid-cols-[1.75fr_1fr] desktop:grid-cols-[2.5fr_1fr] w-full tablet:gap-0 tablet:px-10">
      <div className="flex flex-col gap-10 tablet:bg-purple tablet:px-15 tablet:py-10">
        <div className="bg-purple">
          <h2 className="flex flex-col gap-x-2 p-5 min-[320px]:text-[4.25rem] text-white tracking-[-0.1rem] min-[320px]:items-center phone:flex-row phone:flex-wrap phone:justify-center phone:leading-[130%] tablet:p-0 tablet:text-heading desktop:flex-nowrap tablet:gap-x-2.5 tablet:justify-start">
            flexible
            <span className="text-[6rem] min-[320px]:text-[7.5rem] text-white tablet:text-heading">
              &
            </span>
            dynamic
          </h2>
        </div>
        <p className="text-paragraph text-white">
          Laverick Media Communications, now trading as Laverick Ntuli
          Communications, is flexible and dynamic, changing with latest global
          trends and embracing the latest innovations and digital technologies.
          This includes marketing services focused across all social media
          platforms. The LNC team offers clients the best digital packages
          available in our B2B media space.
        </p>
      </div>
      <hr className="text-grey/25 w-full tablet:hidden" />
      <div className="flex flex-col gap-10 tablet:bg-white tablet:items-center tablet:justify-center tablet:p-10 tablet:gap-5">
        <h3 className="text-white text-center text-subheadingLarge tablet:text-black">
          Meet The Team
        </h3>
        <ButtonLink href="/our-team" ariaLabel="Meet the team" color="purple">
          Learn More
        </ButtonLink>
      </div>
    </main>
  );
}
