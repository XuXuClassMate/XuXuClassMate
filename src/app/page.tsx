'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import QuickLinks from '@/components/QuickLinks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WeChatModal from '@/components/WeChatModal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Values />
        <QuickLinks />
      </main>
      <Contact />
      <Footer />
      <WeChatModal />
    </>
  );
}
