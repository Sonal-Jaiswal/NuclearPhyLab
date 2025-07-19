import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professor B.B Sahu</h3>
            <p className="text-primary-foreground leading-relaxed">
              Advancing academic excellence through innovative research, 
              dedicated teaching, and collaborative scholarship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/publications" className="hover:text-primary transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="/#students" className="hover:text-primary transition-colors">
                  Research Group
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>bbsahu@university.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 (0) 1234-567890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>University Campus</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground">
            © {new Date().getFullYear()} Professor B.B Sahu. All rights reserved.<br />
            <span className="text-xs text-primary-foreground">Developed by <a href="https://www.linkedin.com/in/sonal-jaiswal-1b7b1b1b2/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Sonal Jaiswal</a> &bull; <a href="mailto:vsonaljaiswal@gmail.com" className="underline hover:text-primary">vsonaljaiswal@gmail.com</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;