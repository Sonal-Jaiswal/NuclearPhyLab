import { Button } from '@/components/ui/button';
import { FileText, Users, Mail, Atom, Zap, Radio } from 'lucide-react';
import { Suspense, lazy } from 'react';
import kiitCampus from '@/assets/kiit-campus.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={kiitCampus}
          alt="KIIT University Campus"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-academic-navy/80 via-academic-blue/60 to-background/70"></div>
      </div>
      
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-quantum-glow/10 rounded-full blur-xl animate-quantum-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-quantum-secondary/10 rounded-full blur-lg animate-quantum-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-quantum-accent/10 rounded-full blur-md animate-quantum-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-quantum-particle rounded-full animate-particle-drift"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-quantum-glow rounded-full animate-particle-drift" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-quantum-secondary rounded-full animate-particle-drift" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Quantum Lab Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="p-6 rounded-full bg-quantum-glow/10 border-2 border-quantum-glow/30 animate-quantum-pulse">
                  <Atom className="w-16 h-16 text-quantum-glow animate-quantum-float" />
                </div>
                <Zap className="absolute -top-2 -right-2 w-6 h-6 text-quantum-particle animate-quantum-float" style={{ animationDelay: '1s' }} />
                <Radio className="absolute -bottom-2 -left-2 w-5 h-5 text-quantum-secondary animate-quantum-float" style={{ animationDelay: '3s' }} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight quantum-text-glow">
              Nuclear Physics Lab
            </h1>
            <h2 className="text-xl md:text-3xl mb-6 text-quantum-secondary font-semibold">
              KIIT University
            </h2>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advancing the frontiers of nuclear physics through cutting-edge research, 
              exploring quantum phenomena, and developing next-generation technologies 
              for sustainable energy and medical applications.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="quantum-card hover:shadow-lg hover:shadow-quantum-glow/20 transition-all duration-300 border border-quantum-glow/20"
              onClick={() => scrollToSection('about')}
            >
              <Atom className="mr-2 h-5 w-5" />
              Discover Research
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="quantum-border hover:bg-quantum-glow/10 hover:text-quantum-glow transition-all duration-300"
              onClick={() => scrollToSection('publications')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Publications
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="quantum-border hover:bg-quantum-secondary/10 hover:text-quantum-secondary transition-all duration-300"
              onClick={() => scrollToSection('students')}
            >
              <Users className="mr-2 h-5 w-5" />
              Research Team
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Quantum Elements */}
      <div className="absolute top-32 right-16 w-20 h-20 border-2 border-quantum-glow/20 rounded-full animate-quantum-float"></div>
      <div className="absolute bottom-24 left-16 w-16 h-16 border border-quantum-secondary/30 rounded-lg rotate-45 animate-quantum-wave"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 border border-quantum-accent/40 rounded-full animate-quantum-pulse"></div>
    </section>
  );
};

export default Hero;