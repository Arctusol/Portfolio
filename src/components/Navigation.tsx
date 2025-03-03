import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SocialLinks from './common/SocialLinks';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();

  const renderNavItem = (item: { href: string; label: string }, className: string) => {
    if (isHomePage) {
      return (
        <a
          key={item.href}
          href={item.href}
          className={className}
          onClick={isMobileMenuOpen ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        key={item.href}
        to={`/${item.href}`}
        className={className}
        onClick={isMobileMenuOpen ? () => setIsMobileMenuOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );
  };

  const menuItems = [
    { href: '#projects', label: t('navigation.projects') },
    { href: '#services', label: t('navigation.services') },
    { href: '#skills', label: t('navigation.skills') },
    { href: '#contact', label: t('navigation.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Home Link */}
          <Link
            to="/"
            className="text-xl font-bold hover:text-neon transition-colors"
          >
            Antonin Bourdelle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {menuItems.map((item) =>
              renderNavItem(item, "text-base lg:text-lg hover:text-neon transition-colors")
            )}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <SocialLinks variant="header" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item) =>
                  renderNavItem(item, "block text-lg hover:text-neon transition-colors")
                )}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                  <SocialLinks variant="sidebar" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
