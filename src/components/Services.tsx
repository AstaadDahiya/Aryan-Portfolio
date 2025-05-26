
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, modern websites with clean code and beautiful user interfaces. From concept to deployment.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimization", "Performance Focus"],
      icon: "🌐",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with wireframes and prototypes using industry-standard tools like Figma.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨",
      gradient: "from-accent-purple to-accent-teal"
    },
    {
      title: "Game Development",
      description: "Building engaging console games and interactive applications with focus on logic and user experience.",
      features: ["Console Games", "Game Logic", "AI Implementation", "Interactive Design"],
      icon: "🎮",
      gradient: "from-accent-teal to-accent-blue"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How I can help bring your ideas to life through technology and design
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 bg-dark-card border-gray-800 hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Service Icon */}
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="text-accent-blue font-medium mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-dark-card border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm passionate about taking on new challenges and creating innovative solutions. 
              Whether you need a website, want to improve user experience, or have an idea for a game, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-accent-blue">✓</span> Quick Turnaround
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-accent-blue">✓</span> Clean Code
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-accent-blue">✓</span> Modern Design
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-accent-blue">✓</span> Responsive Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
