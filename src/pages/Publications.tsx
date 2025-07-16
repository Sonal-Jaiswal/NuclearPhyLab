import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PublicationsPage = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('/publications.json')
      .then(res => res.json())
      .then(data => setPublications(data));
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'In Press':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Journal Article':
        return 'bg-primary/10 text-primary';
      case 'Conference Paper':
        return 'bg-accent/10 text-accent-foreground';
      case 'Review Article':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Publications & Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Professor B.B Sahu's extensive research contributions and published works 
              that advance knowledge in academic fields.
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                      {pub.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className={getTypeColor(pub.type)}>
                        {pub.type}
                      </Badge>
                      <Badge className={getStatusColor(pub.status)}>
                        {pub.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span className="font-medium">{pub.journal}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{pub.authors}</span>
                      </div>
                      {pub.doi && (
                        <div className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="underline">DOI</a>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                    {pub.notes && (
                      <p className="text-xs text-muted-foreground italic">{pub.notes}</p>
                    )}
                    <div className="pt-2">
                      {(pub.link || pub.doi) && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={pub.link ? pub.link : `https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            View Publication
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicationsPage; 