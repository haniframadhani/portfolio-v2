"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "About", href: "#about" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white/[0.05] backdrop-blur-md text-slate-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="text-3xl font-bold capitalize">
          hanif.
        </Link>
        <div className="hidden lg:block">
          <NavigationMenu className="justify-start">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        navigationMenuTriggerStyle() +
                        " bg-blue-600/0 text-sm text-slate-50 hover:bg-blue-500/10 hover:text-slate-50"
                      }
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              className="hover: px-0 text-slate-50 hover:bg-white/10 hover:text-slate-50 [&_svg]:size-8"
            >
              <Menu />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="border-0 bg-white/[0.05] backdrop-blur-md text-slate-50"
          >
            <SheetTitle className="-z-50 hidden opacity-0"></SheetTitle>
            <div className="grid gap-4 py-10 px-6">
              {navigationItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="hover: text-sm font-medium hover:text-slate-50/90"
                  legacyBehavior
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
