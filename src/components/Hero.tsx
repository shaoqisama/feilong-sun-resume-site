
import { ArrowDownCircle, Mail, Github, Music, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full -top-64 -right-64 blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full -bottom-32 -left-32 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="font-mono text-primary mb-2">Hello, I'm</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Feilong Sun
            </h1>
            <div className="bg-gradient-to-r from-primary to-accent h-1 w-32 mb-6"></div>
            <h2 className="text-xl md:text-2xl font-heading text-foreground/80 mb-8">
              Network Engineer & Creative Technologist
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
              Specialized in LTE/NR infrastructure, AI/ML applications, and cloud-native environments. 
              Passionate about solving complex problems and creating innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="mailto:example@example.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <ArrowDownCircle size={18} />
                My Experience
              </a>
            </div>
            
            <div className="flex gap-4 text-muted-foreground">
              <a href="https://shaoqisama.github.io" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378" className="hover:text-primary transition-colors" aria-label="Music">
                <Music size={20} />
              </a>
              <a href="https://shaoqisama.github.io/gallery" className="hover:text-primary transition-colors" aria-label="Photography">
                <Camera size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-accent opacity-30 blur"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl bg-white shadow-lg overflow-hidden relative z-10">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                  <span className="font-heading text-xl text-center p-8 text-muted-foreground">
                    Profile Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle size={32} className="text-primary/50 hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
