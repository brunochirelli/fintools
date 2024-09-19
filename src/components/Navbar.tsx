"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "./layout/nav-links";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {NAV_LINKS.map((item, i) => (
            <Link
              key={item.name + i}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "bg-muted": pathname === item.path,
                },
              )}
              href={item.path}
            >
              <Home className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
