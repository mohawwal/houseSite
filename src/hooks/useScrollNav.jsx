import { useState, useEffect } from 'react';

const useScrollNav = (threshold = 80) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = (threshold / 100) * viewportHeight;
      
      // Check if scrolled past threshold
      setIsScrolled(scrollPosition > scrollThreshold);
      
      // Determine scroll direction and visibility
      if (scrollPosition <= scrollThreshold) {
        // At top of page - always show
        setIsVisible(true);
      } else if (scrollPosition < lastScrollY) {
        // Scrolling up - show nav
        setIsVisible(true);
      } else if (scrollPosition > lastScrollY) {
        // Scrolling down - hide nav
        setIsVisible(false);
      }
      
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, lastScrollY]);

  return { isScrolled, isVisible };
};

export default useScrollNav;