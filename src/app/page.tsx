"use client";

import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Subtle Interactive Neural Mesh Background */}
      <BackgroundAnimation />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* 1. Navigation */}
        <Header />

        <main className="flex-1">
          {/* 2. Hero with Authentic Photo */}
          <HeroSection />

          {/* 3. Research & Systems Highlights */}
          <HighlightsSection />

          {/* 4. Projects Grid */}
          <ProjectsSection />

          {/* 5. Technical Skills */}
          <SkillsSection />

          {/* 6 & 7. Experience, Education & Certifications */}
          <ExperienceSection />

          {/* 8. Contact & Socials */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
