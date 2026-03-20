import DevelopmentServices from "./_components/developmentServices";
import Faq from "./_components/faq";
import Hero from "./_components/hero";
import PricingsPlans from "./_components/princingsPlans";
import ProcessSteps from "./_components/processSteps";
import Services from "./_components/services";
import Stats from "./_components/stats";
import TrafficService from "./_components/trafficService";

export default function Home() {
  return (
    <>
      <Hero />
      <DevelopmentServices />
      <TrafficService />
      <PricingsPlans />
      <ProcessSteps />
      <Stats />
      <Services />
      <Faq />
    </>
  );
}
