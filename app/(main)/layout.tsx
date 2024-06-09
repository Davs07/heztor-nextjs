import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "./_sections/Navbar";
import { auth, currentUser } from "@clerk/nextjs/server";

export const MainLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // if (!isAuthenticated) {
  //   return redirect("/");
  // }

  return (
    <div className="h-screen relative flex flex-row bg-main-superlight dark:bg-main-hiperdark ">
      <Navbar />
      <div className="w-full h-full flex flex-col">
        <main className="flex-1 h-[calc(100%-56px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
