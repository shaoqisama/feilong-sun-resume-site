
import { Code, Zap, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Skills = () => {
  const { t } = useLanguage();

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

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Code className="text-primary" />
          {t('skills', 'title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="glass-card rounded-xl p-6 shadow-sm animate-on-scroll fade-in"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`, 
                          transition: `width 1s ease-in-out ${skillIndex * 0.2}s` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
