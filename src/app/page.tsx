import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { FabStack } from "@/components/layout/FabStack";
import { IntroSection } from "@/components/sections/IntroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SideProjectsSection } from "@/components/sections/SideProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { TocSidebar } from "@/components/toc/TocSidebar";
import { TocBottomSheet } from "@/components/toc/TocBottomSheet";
import { Snackbar } from "@/components/ui/Snackbar";
import { Lightbox } from "@/components/lightbox/Lightbox";
import { CoachMark } from "@/components/ui/CoachMark";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <ScrollProgressBar />
      <StickyHeader />

      <main className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 md:py-16">
        <div className="flex flex-col gap-16">
          <SectionReveal>
            <Header />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <IntroSection />
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <SkillsSection />
          </SectionReveal>
          <SectionReveal>
            <SideProjectsSection />
          </SectionReveal>
          <SectionReveal>
            <ExperienceSection />
          </SectionReveal>
          <SectionReveal>
            <StrengthsSection />
          </SectionReveal>
          <SectionReveal>
            <Footer />
          </SectionReveal>
        </div>
      </main>

      <TocSidebar />
      <TocBottomSheet />
      <FabStack />
      <Snackbar />
      <Lightbox />
      <CoachMark />
    </div>
  );
}
