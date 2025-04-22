import { Code, Zap, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState, useRef } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const Skills = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      name: language === 'zh' ? "LTE技术" : "LTE Technology",
      icon: <Zap className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "网络规划与参数优化" : "Network planning & parameter optimization", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "RF优化与多厂商RAN故障排查" : "RF optimization & multi-vendor RAN troubleshooting", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "系统Feature与性能调优" : "System feature implementation & performance tuning", 
          level: 80 
        }
      ]
    },
    {
      name: language === 'zh' ? "5G NR技术" : "5G NR Technology",
      icon: <Zap className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "NSA/SA部署与异构网络优化" : "NSA/SA deployment & inter-RAT optimization", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "AAS倾角配置与SSB波束优化" : "AAS tilt configuration & SSB beam optimization", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "KPI监控与功能性能调优" : "KPI monitoring & feature-based performance tuning", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "生成式AI" : "Generative AI",
      icon: <Cpu className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "提示词工程与RAG实施" : "Prompt engineering & RAG implementation", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "LLM微调与企业级应用" : "LLM fine-tuning & enterprise applications", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "合成数据生成与增强" : "Synthetic data generation & augmentation", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "本地LLM部署（Llama、TeleBERT）" : "On-premise LLM deployment (Llama, TeleBERT)", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "机器学习与自动化" : "ML & Automation",
      icon: <Code className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "Python、Golang、JavaScript、C++、Rust" : "Programming: Python, Golang, JavaScript, C++, Rust", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "数据管道与ML模型开发" : "Data pipelines & ML model development", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "时序KPI分析与预测" : "Time-series KPI analysis & forecasting", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "开发框架：Dash、Evidently、LangChain、Next.js" : "Development frameworks: Dash, Evidently, LangChain, Next.js", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "云原生与DevOps" : "Cloud Native & DevOps",
      icon: <Cloud className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "容器编排：Docker与Kubernetes" : "Container orchestration: Docker & Kubernetes", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "云基础设施：AWS、Azure、Terraform" : "Cloud infrastructure: AWS, Azure, Terraform", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "CI/CD管道自动化：Jenkins、GitLab CI" : "CI/CD pipeline automation: Jenkins, GitLab CI", 
          level: 75 
        },
        { 
          name: language === 'zh' ? "基础设施监控：Kubeflow、Zabbix、Ansible" : "Infrastructure monitoring: Kubeflow, Zabbix, Ansible", 
          level: 70 
        }
      ]
    }
  ];

  // New skill keywords for the animation
  const skillKeywords = [
    // LTE
    'LTE', 'RF Optimization', 'VoLTE', 'Network Planning', 'Parameter Tuning',
    // 5G
    'NR', 'NSA/SA', 'Beamforming', 'AAS', 'SSB',
    // AI
    'Generative AI', 'LLM', 'RAG', 'Prompt Engineering', 'Fine-tuning',
    // ML
    'Python', 'Golang', 'ML Ops', 'Data Pipeline', 'Forecasting',
    // Cloud
    'Kubernetes', 'Docker', 'AWS', 'Azure', 'CI/CD',
    // Additional keywords
    'Telecommunications', 'Automation', 'DevOps', 'Analytics', 'Next.js'
  ];

  // Animation setup and control
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match its display size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Get primary color from CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    let primaryColor = computedStyle.getPropertyValue('--color-primary').trim() || 
                     (theme === 'dark' ? '#3b82f6' : '#2563eb');
    if (!primaryColor) primaryColor = theme === 'dark' ? '#3b82f6' : '#2563eb';

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    // Position keywords in a grid-like layout
    const keywords = skillKeywords.map((word, index) => {
      const columns = 5;
      const rows = Math.ceil(skillKeywords.length / columns);
      const col = index % columns;
      const row = Math.floor(index / columns);
      
      return {
        text: word,
        x: (canvas.width / (columns + 1)) * (col + 1),
        y: (canvas.height / (rows + 1)) * (row + 1),
        size: 18,
        opacity: 0.65,
        scale: 1,
        rotation: 0,
        targetScale: 1,
        targetRotation: 0,
        glowIntensity: 0,
        targetGlowIntensity: 0
      };
    });

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw keywords
      keywords.forEach(keyword => {
        // Check if word is being hovered
        const textWidth = ctx.measureText(keyword.text).width;
        const isHovered = 
          mouseX > keyword.x - textWidth/2 &&
          mouseX < keyword.x + textWidth/2 &&
          mouseY > keyword.y - keyword.size/2 &&
          mouseY < keyword.y + keyword.size/2;

        // Smoothly update target values
        keyword.targetScale = isHovered ? 1.15 : 1;
        keyword.targetRotation = isHovered ? 0 : 0;
        keyword.targetGlowIntensity = isHovered ? 1 : 0;

        // Smooth transitions
        keyword.scale += (keyword.targetScale - keyword.scale) * 0.1;
        keyword.rotation += (keyword.targetRotation - keyword.rotation) * 0.1;
        keyword.glowIntensity += (keyword.targetGlowIntensity - keyword.glowIntensity) * 0.1;
        keyword.opacity = 0.65 + (keyword.glowIntensity * 0.35);

        // Save context state
        ctx.save();
        
        // Move to word position
        ctx.translate(keyword.x, keyword.y);
        ctx.rotate(keyword.rotation);
        ctx.scale(keyword.scale, keyword.scale);

        // Draw keyword with effects
        ctx.font = `${isHovered ? 'medium' : ''} ${Math.floor(keyword.size * keyword.scale)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        
        // Enhanced glow effect - more subtle
        if (keyword.glowIntensity > 0) {
          ctx.shadowColor = primaryColor;
          ctx.shadowBlur = 12 * keyword.glowIntensity;
          
          // Single layer of glow for cleaner effect
          ctx.fillStyle = `rgba(${primaryColor.startsWith('#') ? 
            hexToRgb(primaryColor) : 
            primaryColor.replace('rgb(', '').replace(')', '')}, ${0.2 * keyword.glowIntensity})`;
          ctx.fillText(keyword.text, 0, 0);
        }

        // Draw main text
        ctx.shadowBlur = 0;
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${keyword.opacity})`
          : `rgba(30, 41, 59, ${keyword.opacity})`;
        ctx.fillText(keyword.text, 0, 0);

        // Restore context state
        ctx.restore();
      });

      // Continue animation for hover effects
      animationRef.current = requestAnimationFrame(animate);
    };

    // Helper function to convert hex to RGB
    const hexToRgb = (hex: string) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const formattedHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
      
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
        '59, 130, 246';
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasRef, theme]);

  const toggleCategory = (categoryName: string) => {
    if (expanded === categoryName) {
      setExpanded(null);
    } else {
      setExpanded(categoryName);
    }
  };

  const categoryAverages = skillCategories.map(category => {
    const avgSkill = category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length;
    return {
      name: category.name,
      value: Math.round(avgSkill),
      icon: category.icon
    };
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-8">
          <Code className="text-primary" />
          {t('skills', 'title')}
        </h2>

        <div className="mb-10 glass-card rounded-xl p-4 md:p-6 shadow-sm animate-on-scroll fade-in">
          <h3 className="text-lg font-semibold mb-6 text-center">{t('skills', 'overview')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {categoryAverages.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-3 md:p-4 bg-secondary/30 dark:bg-secondary/10 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all cursor-pointer"
                onClick={() => toggleCategory(skillCategories[index].name)}
              >
                <div className="mb-2">{category.icon}</div>
                <h4 className="text-xs md:text-sm font-medium mb-2 text-center">{category.name}</h4>
                {!isMobile ? (
                  <div className="relative w-16 md:w-20 h-16 md:h-20 mb-2">
                    <div 
                      className="w-full h-full rounded-full border-4 border-muted flex items-center justify-center"
                      style={{
                        background: `conic-gradient(var(--color-primary) ${category.value}%, transparent 0)`
                      }}
                    >
                      <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-background flex items-center justify-center text-xs md:text-sm font-bold">
                        {category.value}%
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full px-2">
                    <Progress 
                      value={showProgress ? category.value : 0} 
                      className="h-2 bg-secondary"
                    />
                    <span className="text-xs text-muted-foreground mt-1 block text-center">
                      {category.value}%
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, catIndex) => (
            <Collapsible
              key={catIndex}
              open={expanded === category.name}
              onOpenChange={() => toggleCategory(category.name)}
              className="glass-card rounded-xl p-4 md:p-6 shadow-sm animate-on-scroll fade-in"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="text-base md:text-lg font-semibold">{category.name}</h3>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {expanded === category.name ? t('skills', 'less') : t('skills', 'more')}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-3 md:space-y-4 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-on-scroll fade-in" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <span className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-0">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.level : 0} 
                      className="h-2 bg-secondary"
                      style={{ transition: `all 1s ease-in-out ${skillIndex * 0.2}s` }}
                    />
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        
        {/* Keyword Map Animation */}
        <div className="mt-16 glass-card rounded-xl overflow-hidden shadow-sm animate-on-scroll fade-in">
          <div className="w-full relative">
            <canvas 
              ref={canvasRef}
              className="w-full h-[350px] md:h-[450px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
