import { GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Education = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <GraduationCap className="text-primary" />
          {t('education', 'title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/50 dark:bg-secondary/20 rounded-xl p-8 border border-border/10 shadow-sm animate-on-scroll fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  {t('education', 'degree')}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {t('education', 'university')}
                </p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {t('education', 'period')}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/10">
              <h4 className="font-semibold mb-3">
                {language === 'zh' ? "专业概述" : "About the Program"}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'zh' 
                  ? "西安工业大学通信工程专业提供网络技术、电信系统和信号处理方面的全面教育。课程将现代通信系统的理论基础与实际应用相结合，培养具备扎实专业知识和实践能力的通信工程人才。"
                  : "The Communication Engineering program at Xi'an Technological University provides comprehensive education in network technologies, telecommunications systems, and signal processing. The curriculum combines theoretical foundations with practical applications in modern communication systems."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
