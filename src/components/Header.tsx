import { useState } from 'react';
import { Menu, X, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-quantum-glow/10 border border-quantum-glow/20">
              <Atom className="w-6 h-6 text-quantum-glow animate-quantum-float" />
            </div>
            <div className="text-lg font-bold text-foreground">
              <div className="quantum-text-glow">Nuclear Physics Lab</div>
              <div className="text-xs font-medium text-muted-foreground font-mono">KIIT University</div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/#about"
              className="text-foreground hover:text-quantum-glow transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/publications"
              className="text-foreground hover:text-quantum-glow transition-colors relative group"
            >
              Publications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#students"
              className="text-foreground hover:text-quantum-glow transition-colors relative group"
            >
              Research Group
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#contact"
              className="text-foreground hover:text-quantum-glow transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-quantum-glow/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/#about"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/publications"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/#students"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Research Group
              </Link>
              <Link
                to="/#contact"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;