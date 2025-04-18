
import { Mail, Github, ExternalLink, Phone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 bg-secondary/50 dark:bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Mail className="text-primary" />
          {t('contact', 'title')}
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            {t('contact', 'getInTouch')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Mail size={20} />
              {t('contact', 'email')}
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Phone size={20} />
              +86 123-4567-8901
            </a>
            <a 
              href="https://shaoqisama.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg shadow-sm border border-border/20 hover:bg-secondary/70 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="bg-card dark:bg-slate-800/50 rounded-xl p-8 shadow-sm border border-border/20 animate-on-scroll fade-in">
            <h3 className="text-xl font-semibold mb-6 font-heading">
              {language === 'en' ? "Let's Build Beautiful Things Together" : "让我们一起创造美好事物"}
            </h3>
            
            <div className="text-muted-foreground space-y-4">
              <p className="mb-4">
                {language === 'en' 
                  ? "Whether you're interested in discussing telecommunications, AI/ML applications, or creative collaborations in music or photography, I'm always open to connect and explore new opportunities."
                  : "无论是讨论通信技术、AI/ML应用，还是音乐摄影方面的创意合作，我都很乐意与您交流并探索新的机会。"
                }
              </p>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium mb-2">{language === 'en' ? 'WeChat' : '微信'}</p>
                <p className="text-sm">WeChat ID: your_wechat_id</p>
              </div>
            </div>
            
            <a 
              href="https://shaoqisama.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-6"
            >
              {language === 'en' ? 'Visit my blog' : '访问我的博客'}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
