
import { Cpu, Radio, Brain, Rocket, LineChart, Database } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('lte');
  
  const skillCategories = [
    {
      id: 'lte',
      name: 'LTE',
      icon: <Radio className="w-5 h-5" />,
      skills: [
        { name: 'PCI/Neighbor/TAC/RSI planning & consistency', level: 95 },
        { name: 'RF & cluster tuning', level: 90 },
        { name: 'Shared RAN troubleshooting', level: 85 },
        { name: 'Feature testing (e.g., ASGH, IFHO)', level: 90 }
      ]
    },
    {
      id: 'nr',
      name: 'NR (5G)',
      icon: <Radio className="w-5 h-5" />,
      skills: [
        { name: 'AAS tilt & SSB beam optimization', level: 90 },
        { name: 'SSB pattern tuning and observability', level: 85 },
        { name: 'Feature tuning for KPIs', level: 80 },
        { name: 'SSB power boost configuration', level: 85 }
      ]
    },
    {
      id: 'ai',
      name: 'Generative AI',
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'Prompt engineering & RAG integration', level: 85 },
        { name: 'LLM fine-tuning using LoRA', level: 80 },
        { name: 'Synthetic data workflows', level: 75 },
        { name: 'Local model deployment (Llama2, TeleBERT)', level: 85 }
      ]
    },
    {
      id: 'ml',
      name: 'ML & Automation',
      icon: <LineChart className="w-5 h-5" />,
      skills: [
        { name: 'Scripting: Python, Golang, JavaScript, C++', level: 90 },
        { name: 'Data pipelines, regression/classification', level: 85 },
        { name: 'KPI analysis from ENIQ (Sybase)', level: 80 },
        { name: 'Tools: Dash, Evidently, Streamlit, LangChain', level: 85 }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Native & Linux',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'Docker & Kubernetes in Linux environments', level: 80 },
        { name: 'Cloud: AWS, Azure, Terraform', level: 75 },
        { name: 'CI/CD: Jenkins, GitLab CI', level: 70 },
        { name: 'Monitoring: Kubeflow', level: 75 }
      ]
    }
  ];
  
  const getActiveCategory = () => {
    return skillCategories.find(category => category.id === activeTab) || skillCategories[0];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Cpu className="text-primary" />
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-8 gap-2">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-foreground hover:bg-primary/10'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-border/20 p-6 md:p-8 animate-on-scroll fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                {getActiveCategory().icon}
              </div>
              <h3 className="text-xl font-semibold font-heading">{getActiveCategory().name}</h3>
            </div>
            
            <div className="space-y-6">
              {getActiveCategory().skills.map((skill, index) => (
                <div key={index} className="animate-on-scroll fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
