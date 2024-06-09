import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 ">
      <Image
        src="/HeztorBlue.svg"
        alt="Logo"
        width="50"
        height="50"
        className="min-w-[50px]"
      />
      <div className="text-shadow hidden md:flex ">
        <p
          className={cn(
            "text-3xl font-bold text-main-2 dark:text-main-superlight",
            font.className
          )}>
          Heztor
        </p>
      </div>
    </div>
  );
};

export default Logo;
