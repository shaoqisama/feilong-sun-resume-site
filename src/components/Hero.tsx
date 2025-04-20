import { ArrowDownCircle, Mail, Github, Music, Camera } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animated particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const createParticles = () => {
      const isDark = document.documentElement.classList.contains('dark');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: isDark ? 
            `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})` :
            `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 200)}, ${Math.random() * 0.2 + 0.05})`
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    // Handle window resize
    const handleResize = () => {
      createParticles();
    };
    
    // Handle theme change
    const handleThemeChange = () => {
      createParticles();
    };
    
    createParticles();
    drawParticles();
    
    window.addEventListener('resize', handleResize);
    
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);
  
  return (
    <section id="top" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background to-background dark:from-slate-900 dark:via-blue-900/50 dark:to-purple-900/50">
      {/* Canvas for particle animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-70"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Floating light orbs */}
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full -top-64 -right-64 blur-3xl animate-[pulse-slow_15s_ease-in-out_infinite]"></div>
      <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full -bottom-32 -left-32 blur-3xl animate-[pulse-slow_10s_ease-in-out_infinite_1s]"></div>
      
      {/* Additional floating elements */}
      <div className="absolute w-[150px] h-[150px] bg-cyan-500/10 dark:bg-purple-500/10 rounded-full top-1/4 left-10 blur-2xl animate-[pulse-slow_7s_ease-in-out_infinite_0.5s]"></div>
      <div className="absolute w-[100px] h-[100px] bg-violet-500/10 dark:bg-cyan-500/10 rounded-full bottom-1/4 right-10 blur-xl animate-[pulse-slow_8s_ease-in-out_infinite_1.2s]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-primary mb-2 animate-[fade-in_0.5s_ease-out_0.2s_forwards] opacity-0">{t('hero', 'greeting')}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 animate-[fade-in_0.5s_ease-out_0.4s_forwards] opacity-0 relative">
            {t('hero', 'name')}
            <span className="absolute -z-10 blur-3xl opacity-20 animate-pulse bg-gradient-to-r from-primary to-accent w-full h-20 left-0 top-1/2 -translate-y-1/2"></span>
          </h1>
          <div className="bg-gradient-to-r from-primary to-accent h-1 w-0 mx-auto mb-6 animate-[slide-in-right_1s_ease-out_0.7s_forwards]"></div>
          <h2 className="text-xl md:text-2xl font-heading text-foreground/80 mb-8 animate-[fade-in_0.5s_ease-out_0.6s_forwards] opacity-0">
            {t('hero', 'title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-[fade-in_0.5s_ease-out_0.8s_forwards] opacity-0">
            {t('hero', 'description')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10 animate-[fade-in_0.5s_ease-out_1s_forwards] opacity-0">
            <a 
              href="mailto:shaoqisama@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors hover:scale-105 transform duration-300"
            >
              <Mail size={18} className="animate-bounce" />
              {t('hero', 'contactMe')}
            </a>
            <a 
              href="#experience" 
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/20 hover:border-primary/40 transition-colors hover:scale-105 transform duration-300"
            >
              <ArrowDownCircle size={18} className="animate-pulse" />
              {t('hero', 'myExperience')}
            </a>
          </div>
          
          <div className="flex gap-4 text-muted-foreground justify-center animate-[fade-in_0.5s_ease-out_1.2s_forwards] opacity-0">
            <a href="https://github.com/shaoqisama/" className="hover:text-primary transition-colors hover:scale-110 transform duration-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378" className="hover:text-primary transition-colors hover:scale-110 transform duration-300" aria-label="Music">
              <Music size={20} />
            </a>
            <a href="https://shaoqisama.github.io/gallery" className="hover:text-primary transition-colors hover:scale-110 transform duration-300" aria-label="Photography">
              <Camera size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down" className="hover:scale-110 transform duration-300">
          <ArrowDownCircle size={32} className="text-primary/50 hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
