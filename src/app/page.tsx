import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='mt-24 mx-auto px-6 md:px-24 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
