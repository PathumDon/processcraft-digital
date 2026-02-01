import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <About />
    </div>
  );
}
