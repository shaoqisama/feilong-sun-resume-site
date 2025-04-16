
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-white border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-heading font-bold text-xl text-primary mb-2">
              Feilong <span className="text-foreground">Sun</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Network Engineer & Creative Technologist
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-6 mb-4">
              <a 
                href="https://shaoqisama.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
              <a 
                href="https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Music
              </a>
              <a 
                href="https://shaoqisama.github.io/gallery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Photography
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Feilong Sun. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a 
            href="#top" 
            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
