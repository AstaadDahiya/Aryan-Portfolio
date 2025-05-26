import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-blue/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '-3s'
    }}></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
              <img src="https://i.postimg.cc/2663Ht57/imageedit-1-7517643183.png" alt="Aryan Dahiya" className="w-full h-full rounded-full object-scale-down" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block">Aryan</span>
            <span className="gradient-text">Dahiya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Aspiring Software Engineer | Web & Game Developer | UI/UX Designer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            Motivated 2nd-year ECE student at MAIT, passionate about creating digital experiences 
            through code and design. Currently building the future, one project at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Button onClick={scrollToAbout} size="lg" className="bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue transition-all duration-300 transform hover:scale-105">
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-bg transition-all duration-300" onClick={() => window.open('mailto:engineer.aryan.work@gmail.com')}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent-blue" />
      </div>
    </section>;
};
export default Hero;