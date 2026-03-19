import DevelopmentServices from "./_components/developmentServices";
import Hero from "./_components/hero";
import PricingsPlans from "./_components/princingsPlans";
import Services from "./_components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <DevelopmentServices />
      <PricingsPlans />
      <Services />
    </>
  );
}
