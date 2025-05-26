import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('N7ks6IkPEHuh55T0l');

      // Send email using EmailJS
      await emailjs.send(
        'service_j86ng09', // Service ID
        'template_34h0ip5', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aryan Dahiya',
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a project or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-dark-card border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-800 border-gray-700 text-white focus:border-accent-blue"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-800 border-gray-700 text-white focus:border-accent-blue"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-accent-blue resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
