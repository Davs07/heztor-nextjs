"use client";

import Image from "next/image";

// import useDarkTheme from "@/hooks/use-dark-theme";
// import { Button } from "@/components/ui/button";
// import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { useConvexAuth } from "convex/react";

const Heroes = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  // const darkTheme = useDarkTheme();

  const [darkTheme] = useState(false);

  const [isAuthenticated] = useState(true);

  return (
    <div className="flex flex-row items-center justify-center max-w-5xl">
      <div className="min-w-[480px] ">
        <h1 className="text-5xl  sm:text-6xl font-bold text-main-extradark  dark:text-white max-w-[32rem] mb-4">
          GESTIONA <span className="text-main-2">TODO</span> <br /> TU DÍA
        </h1>
        {isAuthenticated && (
          <Button className="text-xl bg-main-2 hover:bg-main-superdark">
            <a href={"/dashboard"}>Abrir Heztor</a>
          </Button>
        )}
      </div>
      <div className="flex items-center">
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
          <Image
            src={`/HeztorHero${darkTheme ? "-dark" : ""}.png`}
            alt="Heztor Hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="min-w-[480px] ">
        <h1 className="text-5xl  sm:text-6xl font-bold text-main-2   max-w-[32rem] mb-4">
          EN UN <br />
          <span className="text-main-extradark dark:text-white">MISMO</span>
          <br />
          LUGAR
        </h1>
        <Button className="text-xl">
          <a href={"/dashboard"}>Conocer más</a>
        </Button>
      </div>
    </div>
  );
};

export default Heroes;
