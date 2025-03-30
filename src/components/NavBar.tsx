"use client";
import { LOGO, LOGO2 } from "@/assets";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full transition-all duration-300 z-50",
        isScrolled
          ? "bg-black h-[75px]"
          : "bg-transparent h-[120px] backdrop-blur-md"
      )}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo on the left */}
        <div
          className={cn(
            "transition-transform duration-300 pl-6",
            isScrolled
              ? "scale-60 translate-y-[-27px]"
              : "scale-100 translate-y-[-5px]"
          )}
        >
          <Link href="/">
            <Image src={LOGO2} alt="AnnaBanna Tours Logo" width={130} />
          </Link>
        </div>

        {/* Navigation Items on the right */}
        <NavigationMenu className="pr-20">
          <NavigationMenuList
            className={cn(
              "flex space-x-8 transition-all duration-300",
              isScrolled ? "translate-y-[-30px]" : "translate-y-0"
            )}
          >
            {[
              { name: "Home", route: "/" },
              { name: "Airport Transfers", route: "/airport" },
              { name: "Island Tours", route: "/tours" },
              { name: "Shore Excursions", route: "/" },
              { name: "Contact Us", route: "/" },
            ].map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.route} legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-base font-bold hover:text-yellow-400 transition-all duration-200">
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
