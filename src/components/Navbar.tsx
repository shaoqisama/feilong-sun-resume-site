import { useState, useEffect, ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { DownloadCV } from './DownloadCV';
import { useLanguage } from './LanguageProvider';

interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { titleEn: 'About', titleZh: '关于', href: '#about' },
    { titleEn: 'Experience', titleZh: '经验', href: '#experience' },
    { titleEn: 'Education', titleZh: '教育', href: '#education' },
    { titleEn: 'Skills', titleZh: '技能', href: '#skills' },
    { titleEn: 'Projects', titleZh: '项目', href: '#creative-projects' },
    { titleEn: 'Contact', titleZh: '联系', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm dark:bg-slate-900/90' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#top" className="font-heading font-bold text-xl text-primary">
            Feilong <span className="text-foreground">Sun</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="font-medium transition-colors hover:text-primary"
              >
                {language === 'en' ? link.titleEn : link.titleZh}
              </a>
            ))}
          </div>

          {/* Theme, Language Controls and Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <DownloadCV />
            {children}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-md py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="font-medium py-2 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? link.titleEn : link.titleZh}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-border/10">
                <DownloadCV />
              </div>
              <div className="flex">
                {children}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
