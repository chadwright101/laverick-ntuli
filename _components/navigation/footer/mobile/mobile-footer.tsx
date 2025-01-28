import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-5 items-center bg-purple px-5 py-10 tablet:hidden">
      <div className="flex gap-5 mb-5">
        <Link
          href="https://www.facebook.com/lavntulicom"
          aria-label="Facebook"
          target="_blank"
          className="p-3 -m-3"
        >
          <Image src="/icons/facebook.svg" alt="" width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/laverick-ntuli-communications/"
          aria-label="LinkedIn"
          className="p-3 -m-3"
        >
          <Image src="/icons/linkedin.svg" alt="" width={20} height={20} />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Link
          href="tel:+27799491090"
          className="text-white p-2 -m-2"
          target="_blank"
        >
          +27 79 949 1090
        </Link>
        <Link
          href="mailto:sonia@laverickmedia.co.za"
          className="text-white p-2 -m-2"
        >
          sonia@laverickmedia.co.za
        </Link>
      </div>
      <hr className="text-grey/25 w-[70px]" />
      <div className="text-center">
        <p className="text-[14px] tracking-[-0.0075rem] text-white">
          Designed & developed by
        </p>
        <Link
          href="https://thewrightdesigns.co.za"
          aria-label="The Wright Designs"
          className="text-[14px] tracking-[-0.0075rem] text-white p-2 -m-2"
          target="_blank"
        >
          The Wright Designs
        </Link>
      </div>
      <hr className="text-grey/25 w-[70px]" />
      <div className="text-center">
        <h4 className="text-white font-light text-[14px] tracking-[-0.0075rem]">
          © Laverick Ntuli Communications
        </h4>
        <Link
          href="/"
          className="text-white text-[14px] tracking-[-0.0075rem] p-2 -m-2"
        >
          www.laverickntuli.co.za
        </Link>
      </div>
    </div>
  );
}
