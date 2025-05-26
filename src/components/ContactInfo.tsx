
import { Card } from '@/components/ui/card';

const ContactInfo = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "engineer.aryan.work@gmail.com",
      href: "mailto:engineer.aryan.work@gmail.com",
      icon: "📧"
    },
    {
      label: "Phone",
      value: "+91 9350729197",
      href: "tel:+919350729197",
      icon: "📱"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aryan-dahiya-astaad1",
      href: "https://linkedin.com/in/aryan-dahiya-astaad1",
      icon: "💼"
    },
    {
      label: "GitHub",
      value: "github.com/AstaadDahiya",
      href: "https://github.com/AstaadDahiya",
      icon: "💻"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Let's connect
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Whether you want to discuss a project, collaboration, or just want to say hello, 
          I'm always open to new opportunities and conversations.
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <Card 
            key={info.label}
            className="p-4 bg-dark-card border-gray-800 hover:border-accent-blue/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <a 
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-300 hover:text-accent-blue transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center text-xl">
                {info.icon}
              </div>
              <div>
                <h4 className="font-medium text-white">{info.label}</h4>
                <p className="text-sm">{info.value}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border-accent-blue/30">
        <h4 className="text-xl font-semibold text-white mb-3">
          Available for freelance work
        </h4>
        <p className="text-gray-300 mb-4">
          I'm currently available for freelance projects and collaborations. 
          Let's create something amazing together!
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm">
            Web Development
          </span>
          <span className="bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm">
            UI/UX Design
          </span>
          <span className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded-full text-sm">
            Game Development
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
