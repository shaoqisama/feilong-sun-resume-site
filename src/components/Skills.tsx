import { Code, Zap, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const Skills = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      name: language === 'zh' ? "LTE技术" : "LTE",
      icon: <Zap className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "PCI/邻区/TAC/RSI规划与一致性" : "PCI/Neighbor/TAC/RSI planning & consistency", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "RF与集群调优，共享RAN故障排除" : "RF & cluster tuning, shared RAN troubleshooting", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "功能测试（如ASGH、IFHO）" : "Feature testing (e.g., ASGH, IFHO)", 
          level: 80 
        }
      ]
    },
    {
      name: language === 'zh' ? "NR (5G)技术" : "NR (5G)",
      icon: <Zap className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "AAS倾角与SSB波束优化" : "AAS tilt & SSB beam optimization", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "SSB模式调整与可观测性" : "SSB pattern tuning and observability", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "针对KPI的功能调优（如SSB功率提升）" : "Feature tuning for KPIs (e.g., SSB power boost)", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "生成式AI" : "Generative AI",
      icon: <Cpu className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "提示词工程与RAG集成" : "Prompt engineering & RAG integration", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "使用LoRA进行LLM微调" : "LLM fine-tuning using LoRA", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "合成数据工作流" : "Synthetic data workflows", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "部署本地模型（Llama2、TeleBERT）" : "Deployed local models (Llama2, TeleBERT)", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "机器学习与自动化" : "ML & Automation",
      icon: <Code className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "脚本开发：Python、Golang、JavaScript、C++" : "Scripting: Python, Golang, JavaScript, C++", 
          level: 90 
        },
        { 
          name: language === 'zh' ? "数据管道、回归/分类" : "Data pipelines, regression/classification", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "基于ENIQ的KPI分析（Sybase）" : "KPI analysis from ENIQ (Sybase)", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "工具：Dash、Evidently、Streamlit、LangChain" : "Tools: Dash, Evidently, Streamlit, LangChain", 
          level: 75 
        }
      ]
    },
    {
      name: language === 'zh' ? "云原生与Linux" : "Cloud Native & Linux",
      icon: <Cloud className="text-primary" />,
      skills: [
        { 
          name: language === 'zh' ? "Docker与Kubernetes在Linux环境中的应用" : "Docker & Kubernetes in Linux environments", 
          level: 85 
        },
        { 
          name: language === 'zh' ? "云服务：AWS、Azure、Terraform" : "Cloud: AWS, Azure, Terraform", 
          level: 80 
        },
        { 
          name: language === 'zh' ? "CI/CD：Jenkins、GitLab CI" : "CI/CD: Jenkins, GitLab CI", 
          level: 75 
        },
        { 
          name: language === 'zh' ? "监控：Kubeflow" : "Monitoring: Kubeflow", 
          level: 70 
        }
      ]
    }
  ];

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
      </div>
    </section>
  );
};

export default Skills;
