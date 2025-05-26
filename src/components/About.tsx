
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-accent-blue mb-4">
              Hello, I'm Aryan Dahiya
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a motivated and enthusiastic 2nd-year Electronics and Communication Engineering 
              student at Maharaja Agrasen Institute of Technology (MAIT), passionate about the 
              software industry.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in technology combines creativity with technical expertise. I'm skilled 
              in web development, UI/UX design, C/C++ programming, and digital marketing, 
              actively learning and growing to become a successful engineer.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe in the power of combining creativity and technology to solve real-world 
              problems and create meaningful digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-dark-card border-gray-800 hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                  <p className="text-gray-400">Building strong foundations</p>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-accent-blue">
                  B.Tech in Electronics and Communication Engineering
                </h5>
                <p className="text-gray-300">
                  Maharaja Agrasen Institute of Technology (MAIT)
                </p>
                <p className="text-gray-400">2023 – 2027</p>
              </div>
            </Card>

            <Card className="p-6 bg-dark-card border-gray-800 hover:border-accent-purple/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-teal rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Passion</h4>
                  <p className="text-gray-400">What drives me forward</p>
                </div>
              </div>
              <p className="text-gray-300">
                Passionate about creating innovative solutions through technology, 
                with a special focus on web development, game development, and user experience design.
              </p>
            </Card>

            <Card className="p-6 bg-dark-card border-gray-800 hover:border-accent-teal/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-blue rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Goal</h4>
                  <p className="text-gray-400">Where I'm headed</p>
                </div>
              </div>
              <p className="text-gray-300">
                Actively working towards becoming a successful software engineer, 
                combining technical skills with creative problem-solving abilities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
