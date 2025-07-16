import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, BookOpen, Linkedin } from 'lucide-react';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/students.json')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'PhD Student':
        return 'bg-primary/10 text-primary';
      case 'Masters Student':
      case 'MTech Student':
        return 'bg-accent/10 text-accent-foreground';
      case 'Research Scholar':
        return 'bg-secondary text-secondary-foreground';
      case 'BTech Student':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="students" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and scholars working under Professor B.B Sahu's guidance, 
            contributing to cutting-edge research and academic excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={student.photo || '/placeholder.svg'}
                    alt={student.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {student.name}
                </CardTitle>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge className={getLevelColor(student.level)}>
                    {student.level}
                  </Badge>
                  <Badge variant="outline">
                    {student.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center justify-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Research Focus
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {student.research}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {student.email && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={`mailto:${student.email}`}>
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                      </Button>
                    )}
                    {student.linkedin && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={student.linkedin.startsWith('http') ? student.linkedin : `https://linkedin.com/in/${student.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            <ExternalLink className="h-5 w-5" />
            Join Our Research Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Students;