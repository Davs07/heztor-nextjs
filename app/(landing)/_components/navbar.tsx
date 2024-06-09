"use client";

// import { useConvexAuth } from "convex/react";
// import { SignInButton, UserButton } from "@clerk/clerk-react";
// import { Spinner } from "@/components/spinner";

import Link from "next/link";

// import { useScrollTop } from "@/hooks/use-scroll-top";
// import IconChangeLanguage from "@/public/icons/IconChangeLanguage";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
// import { ModeToggle } from "@/components/micro/mode-toggle";

const menuNavbar = [
  {
    name: "Funcionalidades",
    href: "#",
  },
  {
    name: "Soluciones",
    href: "#",
  },
  {
    name: "Recursos",
    href: "#",
  },
];

export const Navbar = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();
  // const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background  fixed top-0 flex flex-row items-center justify-center w-full py-6 lg:px-[15vw] px-3",
        "border-b shadow-sm"
      )}>
      <Logo />

      <div className=" flex-grow flex justify-end pr-3 gap-3 ">
        {menuNavbar.map((item) => (
          <Button key={item.name} variant={"ghost"}>
            {item.name}
          </Button>
        ))}
      </div>
      {/*Secciones del Navbar:  Funcionalidades, Soluciones, Recursos */}
      <div className=" md:justify-end flex justify-between items-center gap-x-3">
        <div className="h-6 w-px bg-main-extradark/40"></div>

        <Button
          variant={"ghost"}
          className="text-main-extradark dark:text-main-superlight">
          <Languages />
        </Button>
        {/* <ModeToggle /> */}
        <div className="h-6 w-px bg-main-extradark/40"></div>
        {/* {isLoading && <Spinner />} */}

        <SignedOut>
          <SignInButton>
            <Button
              variant={"ghost"}
              className="text-main-extradark dark:text-main-superlight"
              // onClick={redirect("habits")}
            >
              Inicia Sesión
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
