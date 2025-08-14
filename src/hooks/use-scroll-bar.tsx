'use client';
import { useEffect, useState } from 'react';

export const useScrollBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 100 && currentScrollY <= 180) {
        if (!hasAnimated) {
          setIsVisible(false);

          setTimeout(() => {
            setIsVisible(true);
          }, 300);

          setHasAnimated(true);
        }
      } else {
        if (hasAnimated) {
          setHasAnimated(false);
        }
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [hasAnimated]);

  return { isVisible, lastScrollY, isMobileMenuOpen, setIsMobileMenuOpen };
};
