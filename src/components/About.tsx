
import { User, Globe, MessageSquare, Music, Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <User className="text-primary" />
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-on-scroll fade-in">
            <h3 className="text-xl font-semibold mb-4 font-heading">
              Network Engineer & Creative Technologist
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a Network Engineer with over a decade of experience specializing in LTE/NR infrastructure, 
              AI/ML applications, and cloud-native environments. My professional focus has been on optimizing
              network performance and implementing cutting-edge solutions for telecommunications infrastructure.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Beyond my technical work, I pursue creative projects in music production and photography, 
              publishing original music and maintaining a personal photography gallery. I'm passionate about 
              merging technical expertise with creative expression to solve complex problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary rounded-lg p-6 card-hover">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Personal Information
                </h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32">Nationality:</span>
                    <span className="text-muted-foreground">People's Republic of China</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Residence:</span>
                    <span className="text-muted-foreground">China</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Gender:</span>
                    <span className="text-muted-foreground">Male</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary rounded-lg p-6 card-hover">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary" />
                  Languages
                </h4>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Chinese Mandarin</span>
                      <span className="text-muted-foreground text-sm">Native</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '100%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">English</span>
                      <span className="text-muted-foreground text-sm">TOEIC Oral Level 6</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll fade-in">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 blur-md"></div>
              <div className="relative bg-white rounded-xl shadow-md p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 font-heading">Personal Blog</h3>
                <p className="text-muted-foreground mb-4">
                  Explore more about my projects, writings, and creative endeavors on my personal blog.
                </p>
                <a 
                  href="https://shaoqisama.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Visit Blog
                </a>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Creative Projects</h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://music.apple.com/cn/album/%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A-single/1771827378" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Music size={18} />
                        "命中注定" on Apple Music
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://music.163.com/#/artist?id=12120054" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Music size={18} />
                        NetEase Music - ESUNLON
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://shaoqisama.github.io/gallery" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Camera size={18} />
                        Photography Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
