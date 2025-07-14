import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import profPhoto from '@/assets/Bidhubhusan-Sahu-bbsahufpy-fpy.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Professor Bidhubhusan Sahu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assistant Professor
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src={profPhoto}
                alt="Professor Bidhubhusan Sahu"
                className="w-64 h-64 rounded-full object-cover shadow-card-hover border-4 border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Sahu earned his M.Sc. (Physics) degree from Ravenshaw University, Cuttack. Subsequently, he completed M.Phil. from Utkal University, and obtained his Ph.D. degree in Nuclear Physics from North Orissa University, Baripada in 2011 under the guidance of Esteemed Professor Dr. Basudeb Sahu. Before joining KIIT in 2012, he was a post-doctoral researcher at Institute of Physics, Bhubaneswar, India from 2010 to 2012. He was awarded a DST (SERB) funded fast track project in 2014 and successfully completed in 2019. One of his student awarded Ph.D degree. Currently he is supervising two research scholars for their doctoral thesis.
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Area</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Sahu’s research area deals with the study of theoretical nucleus-nucleus potential, scattering and fusion phenomena in heavy ion collisions. Currently, he is working on nuclear structures and decay modes of heavy and super-heavy elements using relativistic mean-field (RMF) formalism. He has keen interest to search the possible shell/sub-shell closure in super-heavy nuclei adjacent by decay chains of alpha and other radioactive decay particles using different formulae including the Viola-Seaberg, analytical formula of Royer, universal curve formula, and universal decay law etc.
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Profile Links</h3>
              <ul className="text-muted-foreground leading-relaxed mb-6">
                <li>Email: <a href="mailto:bbsahufpy@kiit.ac.in" className="text-primary underline">bbsahufpy@kiit.ac.in</a></li>
                <li>Google Scholar: <a href="https://scholar.google.com/citations?hl=en&user=jt-0lR0AAAAJ" className="text-primary underline" target="_blank" rel="noopener noreferrer">View Profile</a></li>
              </ul>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Social Links</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Profile, Recent Publications, Educational Qualification, Ph.D</p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Projects</h3>
              <ul className="text-muted-foreground leading-relaxed mb-6">
                <li>JRF, DST Project (SR/S2/HEP-18/2004), India 2006-08</li>
                <li>SRF, DST Project (SR/S2/HEP-18/2004), India 2008-10</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Administrative Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Dy Superintendent KP-VII</p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Memberships</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">OPS, ICS</p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Outreach Activity</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Education for All</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;