/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { PageNavigationRibbon } from './components/PageNavigationRibbon';
import { RunningSilhouettesIntro } from './components/RunningSilhouettesIntro';
import { ScrollReveal } from './components/ScrollReveal';
import { Hero } from './components/Hero';
import { PriceList } from './components/PriceList';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { HamperSection } from './components/HamperSection';
import { MachineryAndTeam } from './components/MachineryAndTeam';
import { FounderSection } from './components/FounderSection';
import { PriceCalculator } from './components/PriceCalculator';
import { LocationHours } from './components/LocationHours';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { NextPagePrompt } from './components/NextPagePrompt';
import { PageId } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('prices');
  const [calculatorInitialService, setCalculatorInitialService] = useState<string | null>(null);
  const [runAnimationKey, setRunAnimationKey] = useState<number>(1);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['prices', 'results', 'hamper', 'workshop', 'founder', 'location'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayRun = () => {
    setRunAnimationKey(prev => prev + 1);
  };

  const handleScrollToCalculator = () => {
    if (activePage !== 'prices') {
      setActivePage('prices');
    }
    setTimeout(() => {
      const el = document.getElementById('calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectServiceForCalculator = (serviceId: string) => {
    setCalculatorInitialService(serviceId);
    handleScrollToCalculator();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-red-600 selection:text-white relative">
      
      {/* 2 Silhouettes Running Across Screen Wearing Glowing Sneakers Intro */}
      {/* Automatically runs on initial load AND every time a new page is opened */}
      <RunningSilhouettesIntro triggerKey={`${activePage}-${runAnimationKey}`} />

      {/* Top Main Navbar */}
      <Navbar
        activePage={activePage}
        onPageChange={handlePageChange}
        onScrollToCalculator={handleScrollToCalculator}
        onReplayRun={handleReplayRun}
      />

      {/* Secondary Quick Page Switcher Ribbon */}
      <PageNavigationRibbon
        activePage={activePage}
        onPageChange={handlePageChange}
        onReplayRun={handleReplayRun}
      />

      {/* Dynamic Animated Page Content */}
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* PAGE 1: PRICES & BOOKING (Most Immediate) */}
          {activePage === 'prices' && (
            <motion.div
              key="page-prices"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <Hero
                  onScrollToCalculator={handleScrollToCalculator}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <PriceList
                  onSelectServiceForCalculator={handleSelectServiceForCalculator}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <PriceCalculator initialServiceId={calculatorInitialService} />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="prices"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

          {/* PAGE 2: BEFORE & AFTER TRANSFORMATION (Proof of Work) */}
          {activePage === 'results' && (
            <motion.div
              key="page-results"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <BeforeAfterShowcase />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="results"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

          {/* PAGE 3: CHEMICAL HAMPER (R1,450.00) (Product Offering) */}
          {activePage === 'hamper' && (
            <motion.div
              key="page-hamper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <HamperSection
                  onAddHamperToCalculator={() => {
                    handlePageChange('prices');
                    handleSelectServiceForCalculator('cleaning-hamper');
                  }}
                />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="hamper"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

          {/* PAGE 4: 2-IN-1 MACHINE & WORKSHOP TEAM (Tech & Team) */}
          {activePage === 'workshop' && (
            <motion.div
              key="page-workshop"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <MachineryAndTeam />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="workshop"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

          {/* PAGE 5: MEET MNYOVU (Founder & Vision) */}
          {activePage === 'founder' && (
            <motion.div
              key="page-founder"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <FounderSection />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="founder"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

          {/* PAGE 6: STORE LOCATION, TRADING HOURS & FAQS (Logistics) */}
          {activePage === 'location' && (
            <motion.div
              key="page-location"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ScrollReveal delay={0.1}>
                <LocationHours />
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <FaqSection />
              </ScrollReveal>

              <NextPagePrompt
                currentPage="location"
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Global Footer with Page Links */}
      <Footer
        onScrollToCalculator={handleScrollToCalculator}
      />

      {/* Fixed Mobile Dock with WhatsApp & Call */}
      <MobileQuickBar onScrollToCalculator={handleScrollToCalculator} />
    </div>
  );
}
