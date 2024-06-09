import Image from "next/image";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6  z-50 ">
      <Logo />
      <div className="md:ml-auto w-full justify-center md:justify-end sm:justify-between flex-wrap  flex items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Política de Privacidad
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Términos y Condiciones
        </Button>
      </div>
    </div>
  );
};

export default Footer;
