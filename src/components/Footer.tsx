import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-academic-navy dark:bg-gray-900 text-white py-12 shadow-inner border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Professor B.B Sahu</h3>
            <p className="text-black dark:text-white leading-relaxed">
              Advancing academic excellence through innovative research, 
              dedicated teaching, and collaborative scholarship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-black dark:text-white">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors text-black dark:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/publications" className="hover:text-primary transition-colors text-black dark:text-white">
                  Publications
                </a>
              </li>
              <li>
                <a href="/#students" className="hover:text-primary transition-colors text-black dark:text-white">
                  Research Group
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors text-black dark:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Contact Info</h4>
            <div className="space-y-3 text-black dark:text-white">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>bbsahufpy@kiit.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98536 05553</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>University Campus</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/20 dark:border-white/20 mt-8 pt-8 text-center">
          <p className="text-black dark:text-white">
            © {new Date().getFullYear()} Professor B.B Sahu. All rights reserved.<br />
            <span className="text-xs text-black dark:text-white">Developed by <a href="https://www.linkedin.com/in/sonal-jaiswal1103/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Sonal Jaiswal</a> &bull; <a href="mailto:vsonaljaiswal@gmail.com" className="underline hover:text-primary">vsonaljaiswal@gmail.com</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;