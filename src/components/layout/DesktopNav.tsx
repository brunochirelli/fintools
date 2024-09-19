import { Package2 } from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import SupportBanner from "@/components/SupportBanner";

export default function DesktopNav() {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Package2 className="h-6 w-6" />
              <span className="">Fintools</span>
            </Link>
          </div>
          <Navbar />
          <SupportBanner />
        </div>
      </div>
    </>
  );
}
