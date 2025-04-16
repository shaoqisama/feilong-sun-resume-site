
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2023.10.24 – Present",
      title: "Cognitive Software Integration / IT Security",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      role: "Technical Support",
      tools: "Linux, Ansible, Python",
      description: [
        "Deployed cognitive software on customer servers and conducted UAT testing.",
        "Integrated security solutions: Falcon EDR installation, SIP_NIP data, vulnerability scans."
      ]
    },
    {
      period: "2023.04.01 – 2024.10.01",
      title: "DCM AI Lab (Remote/Cloud-Based)",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      role: "Technical Support",
      tools: "Python, AWS, Kubeflow, Dash, LangChain, Streamlit",
      description: [
        "Deployed and fine-tuned LLMs (Llama2, TeleBERT) locally with LoRA.",
        "Used LangChain for RAG and synthetic data generation.",
        "Built MLOps dashboards for monitoring and drift detection.",
        "GIS visualization using Folium."
      ]
    },
    {
      period: "2022.12.15 – 2023.03.31",
      title: "TrueMove MOCN Acceptance",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      role: "Team Leader / Technical Support",
      tools: "SAP BI, Logtool, Python",
      description: [
        "Led KPI report automation and troubleshooting.",
        "Acted as CU interface."
      ]
    },
    {
      period: "2022.11.01 – 2022.12.08",
      title: "Ooredoo Qatar FIFA 2022",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      tools: "Netan, SAP BI, TMA, Python (Playwright)",
      description: [
        "Live monitoring and optimization of LTE/NR during matches.",
        "Automated dashboards using Playwright."
      ]
    },
    {
      period: "2022.06.01 – 2022.10.31",
      title: "Taiwan FET AI Team",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      tools: "Python, Pandas, Scikit-learn",
      description: [
        "Built VoLTE DCR optimizer using clustering/classification.",
        "Developed handover oscillation optimizer using vectorized pandas and labeled counters."
      ]
    },
    {
      period: "2015.07.01 – 2022.05.31",
      title: "China Unicom Yantai Project",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      role: "Site Team Leader / Technical Support",
      tools: "Moshell, DingLi, Logtool, Xnow",
      description: [
        "Supported daily KPIs, DT reports, feature testing.",
        "Led coordination, internal reporting, and customer communication."
      ]
    }
  ];

  const olderExperiences = [
    {
      period: "2014.07.01 – 2015.07.01",
      title: "Xinjiang Korla CM LTE TDD Rollout",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      tools: "LROSE, TEMS, Moshell, OSS-RC",
      description: [
        "SSV site verification and cluster tuning.",
        "Issue troubleshooting via log analysis."
      ]
    },
    {
      period: "2013.10.15 – 2014.05.01",
      title: "Gansu Lanzhou LTE Project",
      company: "Ericsson (Xi'an) ICT Services Co., Ltd.",
      tools: "CDS, MCOM, MapInfo, NEPA",
      description: [
        "Initial SSV tuning and troubleshooting.",
        "Conducted consistency checks."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Briefcase className="text-primary" />
          Professional Experience
        </h2>
        
        <h3 className="text-xl font-semibold mb-4 font-heading">
          Ericsson (Xi'an) ICT Services Co., Ltd. — Network Engineer (JS5)
        </h3>
        <p className="text-muted-foreground mb-12">Jul 2013 – Present</p>
        
        <div className="relative pl-0 md:pl-32">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-on-scroll fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.period}</div>
              <div className="mb-1 font-mono text-sm text-muted-foreground md:hidden">
                {exp.period}
              </div>
              <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
              {exp.role && (
                <div className="text-primary font-medium mb-1">
                  {exp.role}
                </div>
              )}
              <div className="mb-2 flex items-center gap-1">
                <span className="text-sm font-medium">Tools:</span>
                <span className="text-sm text-muted-foreground">{exp.tools}</span>
              </div>
              <ul className="space-y-1 mt-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-6 text-foreground/80 font-heading">
            Earlier Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {olderExperiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-border/50 animate-on-scroll fade-in card-hover"
              >
                <div className="mb-1 font-mono text-sm text-muted-foreground">
                  {exp.period}
                </div>
                <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                <div className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium">Tools:</span> {exp.tools}
                </div>
                <ul className="space-y-1 mt-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
