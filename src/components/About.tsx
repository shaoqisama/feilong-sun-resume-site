
import { User, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="bg-white dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <User className="text-primary" />
          {t('about', 'title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-on-scroll fade-in">
            <h3 className="text-xl font-semibold mb-4 font-heading">
              {t('about', 'subtitle')}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about', 'description1')}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about', 'description2')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card rounded-lg p-6 card-hover">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  {t('about', 'personalInfo')}
                </h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32">{t('about', 'nationality')}</span>
                    <span className="text-muted-foreground">{language === 'en' ? "People's Republic of China" : "中华人民共和国"}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">{t('about', 'residence')}</span>
                    <span className="text-muted-foreground">{language === 'en' ? "China" : "中国"}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">{t('about', 'gender')}</span>
                    <span className="text-muted-foreground">{language === 'en' ? "Male" : "男"}</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card rounded-lg p-6 card-hover">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary" />
                  {t('about', 'languages')}
                </h4>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{t('about', 'chineseMandarin')}</span>
                      <span className="text-muted-foreground text-sm">{language === 'en' ? "Native" : "母语"}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '100%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{t('about', 'english')}</span>
                      <span className="text-muted-foreground text-sm">TOEIC Oral/CET Level 6</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll fade-in">
            <div className="gradient-border">
              <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 font-heading">{t('about', 'personalBlog')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about', 'exploreMore')}
                </p>
                <a 
                  href="https://shaoqisama.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  {t('about', 'visitBlog')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
