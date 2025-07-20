import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Globe, Clock, Building } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "bbsahufpy@kiit.ac.in",
      subtitle: "Primary contact for academic inquiries"
    },
    {
      icon: Globe,
      title: "Google Scholar",
      details: "https://scholar.google.com/citations?hl=en&user=jt-0lR0AAAAJ",
      subtitle: "Research profile and publications"
    },
    {
      icon: Building,
      title: "Department",
      details: "School of Applied Sciences, KIIT University",
      subtitle: "Department of Physics"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "KIIT University, Bhubaneswar, India",
      subtitle: "Room/Block details on request"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for research collaborations, academic inquiries, or to learn more 
            about joining our research group.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Info Boxes */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-2 break-all">
                    {contact.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="flex-1 flex items-center justify-center">
            <Card className="shadow-card w-full max-w-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xdkdaknj"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Research inquiry, collaboration, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Please describe your inquiry or interest in detail..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gap-2 flex items-center justify-center px-4 py-2 bg-primary text-black rounded-md hover:bg-primary/90 transition"
                  >
                    <Mail className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;