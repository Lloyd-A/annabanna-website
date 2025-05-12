"use client";
import { LOGO2 } from "@/assets";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button as UIButton } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { FaPlaneDeparture, FaHome } from "react-icons/fa";
import { PiIslandFill } from "react-icons/pi";
import { SiMentorcruise } from "react-icons/si";
import { BiSupport } from "react-icons/bi";

export default function NavBar() {
  return (
    <>
      {/* Desktop navigation: shown on screens >=640px */}
      <div className="hidden sm:block">
        <DesktopNav />
      </div>

      {/* Mobile navigation: shown on screens <640px */}
      <div className="block sm:hidden bg-black h-12">
        <MobileNav />
      </div>
    </>
  );
}

function DesktopNav() {
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

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="bg-black text-gray-200">
        <UIButton size="icon" variant="outline" className="h-12 w-12">
          <Menu className="h-12 w-12 text-white" />
          <span className="sr-only">Open Menu</span>
        </UIButton>
      </SheetTrigger>

      <SheetContent side="left" className="bg-black text-white">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="group flex h-20 w-20 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Image
                src={LOGO2}
                alt="AnnaBanna Tours Logo"
                className="w-full"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="bg-black flex flex-col space-y-6">
          {[
            { name: "Home", icon: <FaHome />, route: "/" },
            {
              name: "Airport Transfers",
              icon: <FaPlaneDeparture />,
              route: "/airport",
            },
            { name: "Island Tours", icon: <PiIslandFill />, route: "/tours" },
            { name: "Shore Excursions", icon: <SiMentorcruise />, route: "/" },
            { name: "Contact Us", icon: <BiSupport />, route: "/" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.route}
              className="flex items-center gap-4 px-8 text-muted-foreground hover:text-foreground text-lg font-semibold hover:text-yellow-400"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
