
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
      color: "from-accent-blue to-accent-purple"
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["C", "C++", "C++ (Advanced)"],
      color: "from-accent-purple to-accent-teal"
    },
    {
      title: "Design",
      icon: "🎨",
      skills: ["UI/UX Design", "Figma"],
      color: "from-accent-teal to-accent-blue"
    },
    {
      title: "Other",
      icon: "📈",
      skills: ["Digital Marketing"],
      color: "from-accent-blue to-accent-purple"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-dark-card border-gray-800 hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-gray-800/50 rounded-lg px-3 py-2 text-center text-gray-300 hover:bg-accent-blue/20 hover:text-accent-blue transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional skill visualization */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "Web Development", level: 85 },
              { skill: "C/C++ Programming", level: 90 },
              { skill: "UI/UX Design", level: 75 },
            ].map((item, index) => (
              <div key={item.skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-accent-blue">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent-blue to-accent-purple h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
