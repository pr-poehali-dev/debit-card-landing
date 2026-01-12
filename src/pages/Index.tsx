import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DebitCardGrid from '@/components/DebitCardGrid';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DebitCardGrid />
      </main>
      <Footer />
    </div>
  );
}
