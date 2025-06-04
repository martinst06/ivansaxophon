import Navigation from '@/components/Navigation';
import PerformanceTypes from '@/components/PerformanceTypes';
import PerformanceGallery from '@/components/PerformanceGallery';
import Footer from '@/components/Footer';

export default function PerformancesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PerformanceTypes />
      <PerformanceGallery />
      <Footer />
    </main>
  );
} 