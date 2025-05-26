
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe Game with AI",
      description: "A console-based game featuring an unbeatable AI opponent using the Minimax algorithm. Demonstrates advanced C++ programming and game theory implementation.",
      tech: ["C++", "Minimax Algorithm", "Game Logic"],
      category: "Game Development",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      title: "Digital Clock Application",
      description: "Real-time clock application with both console-based and web-based versions. Features live updates and customizable display options.",
      tech: ["C++", "JavaScript", "HTML/CSS"],
      category: "Utility Apps",
      gradient: "from-accent-purple to-accent-teal"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website showcasing skills, projects, and experience. Built with modern web technologies and responsive design principles.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      category: "Web Development",
      gradient: "from-accent-teal to-accent-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-dark-card border-gray-800 overflow-hidden hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent-blue/20 hover:text-accent-blue transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue transition-all duration-300 flex-1"
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-bg transition-all duration-300"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-bg transition-all duration-300"
            onClick={() => window.open('https://github.com/AstaadDahiya', '_blank')}
          >
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
