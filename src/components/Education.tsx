
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <GraduationCap className="text-primary" />
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/50 rounded-xl p-8 border border-border/10 shadow-sm animate-on-scroll fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  B.S. in Communication Engineering
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Xi'an Technological University
                </p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Sep 2010 – May 2013
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/10">
              <h4 className="font-semibold mb-3">About the Program</h4>
              <p className="text-muted-foreground leading-relaxed">
                The Communication Engineering program at Xi'an Technological University provides 
                comprehensive education in network technologies, telecommunications systems, and 
                signal processing. The curriculum combines theoretical foundations with practical 
                applications in modern communication systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
