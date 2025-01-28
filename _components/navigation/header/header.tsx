import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";

export function Header() {
  return (
    <header className="border-b-[2px] bg-white border-purple">
      <div className="max-w-[1280px] mx-auto">
        <MobileHeader />
        <DesktopHeader />
      </div>
    </header>
  );
}
