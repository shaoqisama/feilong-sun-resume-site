
import { Mail, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Mail className="text-primary" />
          Get in Touch
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Interested in connecting? Feel free to reach out through any of these platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://shaoqisama.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground rounded-lg shadow-sm border border-border/20 hover:bg-secondary/70 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border/20 animate-on-scroll fade-in">
            <h3 className="text-xl font-semibold mb-6 font-heading">
              Let's Build Beautiful Things Together
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Whether you're interested in discussing telecommunications, AI/ML applications, or creative collaborations in music or photography, I'm always open to connect and explore new opportunities.
            </p>
            
            <a 
              href="https://shaoqisama.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Visit my blog
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
