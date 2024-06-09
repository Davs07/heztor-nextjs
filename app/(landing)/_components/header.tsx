"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
// import { SignInButton } from "@clerk/clerk-react";
// import { useConvexAuth } from "convex/react";
import Link from "next/link";
// import { Spinner } from "@/components/spinner";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 flex flex-col items-center justify-center">
      <p className="text-slate-600  text-xl sm:text-xl dark:text-gray-200">
        Organiza tu vida de manera eficiente con Heztor, la aplicación todo en
        uno que te brinda el control total de tu día a día.
      </p>

      <Button variant={"highlight"}>
        Comenzar
        <ArrowRight className="size-5 ml-2" />
      </Button>
    </div>
  );
};
