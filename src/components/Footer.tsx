
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Aryan Dahiya
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Engineer passionate about creating digital experiences 
              through innovative technology and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-accent-blue transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:engineer.aryan.work@gmail.com"
                className="flex items-center text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                <span className="mr-2">📧</span>
                engineer.aryan.work@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/aryan-dahiya-astaad1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                <span className="mr-2">💼</span>
                LinkedIn
              </a>
              <a 
                href="https://github.com/AstaadDahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                <span className="mr-2">💻</span>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aryan Dahiya. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-2 rounded-lg text-white hover:from-accent-purple hover:to-accent-blue transition-all duration-300"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
