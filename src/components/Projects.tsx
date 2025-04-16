
import { Music, Camera, Palette, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Music Production",
      category: "Creative Arts",
      description: "Released original music on major streaming platforms under different aliases.",
      icon: <Music className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: "\"命中注定\" Single",
          description: "Released on Apple Music under the alias shaoqisama.",
          link: "https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378"
        },
        {
          title: "Legacy Singles",
          description: "Previous releases on NetEase Music under the alias ESUNLON.",
          link: "https://music.163.com/#/artist?id=12120054"
        }
      ]
    },
    {
      title: "Photography",
      category: "Visual Arts",
      description: "Curated photography focusing on nature and urban environments.",
      icon: <Camera className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: "Photography Gallery",
          description: "Personal photo gallery showcasing nature and urban photography.",
          link: "https://shaoqisama.github.io/gallery/"
        }
      ]
    },
    {
      title: "Audio Software Development",
      category: "Technical",
      description: "Digital signal processing using JUCE framework and C++.",
      icon: <Code className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: "Audio DSP Projects",
          description: "Development of audio software using the JUCE framework and C++.",
          link: "https://shaoqisama.github.io"
        }
      ]
    },
    {
      title: "Personal Blog",
      category: "Writing",
      description: "Blog featuring technical writing, creative projects, and professional insights.",
      icon: <Palette className="h-12 w-12 text-primary/80" />,
      items: [
        {
          title: "Technical & Creative Blog",
          description: "Explore writing, projects, and professional experiences.",
          link: "https://shaoqisama.github.io"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Palette className="text-primary" />
          Creative & Personal Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 rounded-xl p-6 border border-border/10 shadow-sm animate-on-scroll fade-in card-hover"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="text-primary/70 text-sm font-medium mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    {project.items.map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-border/20">
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
                          Explore
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
