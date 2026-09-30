import CareersBridge from "@/components/company/CareersBridge";
import CompanyCTA from "@/components/company/CompanyCTA";
import CompanyHero from "@/components/company/CompanyHero";
import HowWeWork from "@/components/company/HowWeWork";
import WhatWeBelieve from "@/components/company/WhatWeBelieve";
import WhoWeAre from "@/components/company/WhoWeAre";
import WhyClientsWorkWithUs from "@/components/company/WhyClientsWorkWithUs";

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <WhoWeAre />
      <HowWeWork />
      <WhatWeBelieve />
      <WhyClientsWorkWithUs />
      <CareersBridge />
      <CompanyCTA />
    </main>
  );
}