
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm;
