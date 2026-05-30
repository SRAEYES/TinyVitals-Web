import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollStorytelling } from "@/components/sections/ScrollStorytelling";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { HealthSphereSection } from "@/components/sections/HealthSphereSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustPrivacy } from "@/components/sections/TrustPrivacy";
import { Values } from "@/components/sections/Values";
import { Statistics } from "@/components/sections/Statistics";
import { AppGallery } from "@/components/sections/AppGallery";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ScrollStorytelling />
        <FeatureShowcase />
        <HealthSphereSection />
        <HowItWorks />
        <TrustPrivacy />
        <Values />
        <Statistics />
        <AppGallery />
        <Team />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
