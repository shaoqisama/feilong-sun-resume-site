
import { ArrowDownCircle, Mail, Github, Music, Camera } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="top" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full -top-64 -right-64 blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full -bottom-32 -left-32 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="font-mono text-primary mb-2">{t('hero', 'greeting')}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            {t('hero', 'name')}
          </h1>
          <div className="bg-gradient-to-r from-primary to-accent h-1 w-32 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl font-heading text-foreground/80 mb-8">
            {t('hero', 'title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero', 'description')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a 
              href="mailto:shaoqisama@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              {t('hero', 'contactMe')}
            </a>
            <a 
              href="#experience" 
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <ArrowDownCircle size={18} />
              {t('hero', 'myExperience')}
            </a>
          </div>
          
          <div className="flex gap-4 text-muted-foreground justify-center">
            <a href="https://github.com/shaoqisama/" className="hover:text-primary transition-colors" aria-label="GitHub">
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
