
import { Code, Zap, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const Skills = () => {
  const { t } = useLanguage();
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

  // Data for the radar chart
  const radarData = skillCategories.map(category => {
    const avgSkill = category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length;
    return {
      subject: category.name,
      A: avgSkill,
      fullMark: 100
    };
  });

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    if (expanded === categoryName) {
      setExpanded(null);
    } else {
      setExpanded(categoryName);
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-8">
          <Code className="text-primary" />
          {t('skills', 'title')}
        </h2>

        {/* Radar Chart for Skills Overview */}
        <div className="mb-10 glass-card rounded-xl p-4 shadow-sm animate-on-scroll fade-in">
          <h3 className="text-lg font-semibold mb-4 text-center">Skills Overview</h3>
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                theme: {
                  light: "#3b82f6",
                  dark: "#93c5fd"
                }
              }}
              className="h-full w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid className="stroke-muted-foreground/50" />
                  <PolarAngleAxis dataKey="subject" className="fill-foreground text-xs" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} className="fill-muted-foreground" />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="var(--color-theme)"
                    fill="var(--color-theme)"
                    fillOpacity={0.5}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
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
