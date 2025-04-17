
import { Code, Zap, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useTheme } from './ThemeProvider';

const Skills = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    // Use setTimeout to trigger animation after component is mounted
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      name: "LTE",
      icon: <Zap className="text-primary" />,
      skills: [
        { name: "PCI/Neighbor/TAC/RSI planning & consistency", level: 90 },
        { name: "RF & cluster tuning, shared RAN troubleshooting", level: 85 },
        { name: "Feature testing (e.g., ASGH, IFHO)", level: 80 }
      ]
    },
    {
      name: "NR (5G)",
      icon: <Zap className="text-primary" />,
      skills: [
        { name: "AAS tilt & SSB beam optimization", level: 85 },
        { name: "SSB pattern tuning and observability", level: 80 },
        { name: "Feature tuning for KPIs (e.g., SSB power boost)", level: 75 }
      ]
    },
    {
      name: "Generative AI",
      icon: <Cpu className="text-primary" />,
      skills: [
        { name: "Prompt engineering & RAG integration", level: 90 },
        { name: "LLM fine-tuning using LoRA", level: 85 },
        { name: "Synthetic data workflows", level: 80 },
        { name: "Deployed local models (Llama2, TeleBERT)", level: 75 }
      ]
    },
    {
      name: "ML & Automation",
      icon: <Code className="text-primary" />,
      skills: [
        { name: "Scripting: Python, Golang, JavaScript, C++", level: 90 },
        { name: "Data pipelines, regression/classification", level: 85 },
        { name: "KPI analysis from ENIQ (Sybase)", level: 80 },
        { name: "Tools: Dash, Evidently, Streamlit, LangChain", level: 75 }
      ]
    },
    {
      name: "Cloud Native & Linux",
      icon: <Cloud className="text-primary" />,
      skills: [
        { name: "Docker & Kubernetes in Linux environments", level: 85 },
        { name: "Cloud: AWS, Azure, Terraform", level: 80 },
        { name: "CI/CD: Jenkins, GitLab CI", level: 75 },
        { name: "Monitoring: Kubeflow", level: 70 }
      ]
    }
  ];

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    if (expanded === categoryName) {
      setExpanded(null);
    } else {
      setExpanded(categoryName);
    }
  };

  // Calculate average skill level for each category
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

        {/* Skills Overview Card */}
        <div className="mb-10 glass-card rounded-xl p-6 shadow-sm animate-on-scroll fade-in">
          <h3 className="text-lg font-semibold mb-6 text-center">Skills Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoryAverages.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-secondary/30 dark:bg-secondary/10 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all cursor-pointer"
                onClick={() => toggleCategory(skillCategories[index].name)}
              >
                <div className="mb-2">{category.icon}</div>
                <h4 className="text-sm font-medium mb-2">{category.name}</h4>
                <div className="relative w-20 h-20 mb-2">
                  <div 
                    className="w-20 h-20 rounded-full border-4 border-muted flex items-center justify-center"
                    style={{
                      background: `conic-gradient(var(--color-primary) ${category.value}%, transparent 0)`
                    }}
                  >
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-sm font-bold">
                      {category.value}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <Collapsible
              key={catIndex}
              open={expanded === category.name}
              onOpenChange={() => toggleCategory(category.name)}
              className="glass-card rounded-xl p-6 shadow-sm animate-on-scroll fade-in"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  {expanded === category.name ? 'Less' : 'More'}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-4 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-on-scroll fade-in" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
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
