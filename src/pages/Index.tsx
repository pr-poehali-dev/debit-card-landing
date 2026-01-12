import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DebitCardGrid from '@/components/DebitCardGrid';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DebitCardGrid />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}