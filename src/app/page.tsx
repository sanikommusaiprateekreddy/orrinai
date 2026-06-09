import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { HowItWorksSection } from "@/components/features/HowItWorksSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { ModelsSection } from "@/components/models/ModelsSection";
import { AdvancedFeatures } from "@/components/features/AdvancedFeatures";
import { FounderSection } from "@/components/about/FounderSection";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ModelsSection />
        <AdvancedFeatures />
        <FounderSection />
        
        {/* Final CTA Section */}
        <section id="waitlist" className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-heading text-4xl md:text-6xl mb-6">Join the Future of AI</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Stop guessing which model to use. Let Orrin AI do the heavy lifting while you focus on what matters.
            </p>
            <div className="bg-secondary/50 p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
