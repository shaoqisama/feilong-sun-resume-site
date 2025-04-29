import { Palette, Music, Camera, Code } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const CreativeProjects = () => {
  const { t, language } = useLanguage();
  
  const projectGroups = [
    {
      title: language === 'zh' ? "音乐制作" : "Music Production",
      icon: <Music className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: "\"命中注定\" Single",
          description: language === 'zh' ? "shaoqisama 在Apple Music上发布的单曲。" : "Released on Apple Music under the alias shaoqisama.",
          link: "https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378"
        },
        {
          title: language === 'zh' ? "历史单曲作品" : "Legacy Singles",
          description: language === 'zh' ? "esunlon 在网易云音乐上发布的作品。" : "Previous releases on NetEase Music under the alias ESUNLON.",
          link: "https://music.163.com/#/artist?id=12120054"
        }
      ]
    },
    {
      title: language === 'zh' ? "摄影" : "Photography",
      icon: <Camera className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: language === 'zh' ? "摄影作品集" : "Photography Gallery",
          description: language === 'zh' ? "展示自然和城市摄影作品的个人相册。" : "Personal photo gallery showcasing nature and urban photography.",
          link: "https://shaoqisama.github.io/gallery/"
        }
      ]
    },
    {
      title: language === 'zh' ? "音频App开发" : "Audio App Development",
      icon: <Code className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: language === 'zh' ? "AI音效生成器" : "AI Music FX Generator: Musicraft",
          description: language === 'zh' ? "专为音乐制作设计的AI音效生成工具，可创建独特的声音效果。" : "An app focused on generating music sample FX for music production.",
          link: "https://v0-music-fx-gen-ks.vercel.app/"
        },
        {
          title: language === 'zh' ? "音频化学家" : "Audio Chemist",
          description: language === 'zh' ? "一款将音乐切片成采样的应用，为音乐制作提供便利。" : "An application for slicing music into samples for music production.",
          link: "https://shaoqisama.github.io/audio-chemist"
        }
      ]
    }
  ];

  return (
    <section id="creative-projects" className="py-20 bg-muted/30 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Palette className="text-primary" />
          {t('projects', 'title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectGroups.map((group, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 shadow-sm animate-on-scroll fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-heading">{group.title}</h3>
                </div>
                
                <div className="space-y-4 mt-2">
                  {group.items.map((item, i) => (
                    <div key={i} className="p-3 bg-secondary/70 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline inline-flex items-center gap-1"
                      >
                        {t('projects', 'explore')}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProjects;
