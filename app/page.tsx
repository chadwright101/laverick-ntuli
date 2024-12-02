import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen grid place-items-center p-10">
      <div className="grid gap-10 justify-items-center">
        <div className="grid justify-items-center gap-3">
          <Image
            src="/images/logo/laverick-ntuli-communications-bulb-only.png"
            alt="Laverick Ntuli Communications Logo"
            width={300}
            height={300}
            className="max-w-[200px] phone:max-w-[250px] tablet:max-w-[300px]"
          />
          <h1 className="text-[24px] text-center">
            Laverick Ntuli Communications
          </h1>
        </div>
        <h2 className="text-center text-[36px] uppercase animate-scale font-bold">
          We&apos;ve got something exciting in the works...
        </h2>
      </div>
    </main>
  );
}
