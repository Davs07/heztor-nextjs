import Footer from "./_components/footer";
import { Heading } from "./_components/header";
import Heroes from "./_components/hero";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col bg-main-superlight dark:bg-main-hiperdark">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heroes />
        <Heading />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
