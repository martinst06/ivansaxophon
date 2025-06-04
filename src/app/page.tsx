import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <Contact />
      
      {/* Page Break */}
      <div className="bg-charcoal py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full border-t border-white/10"></div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
