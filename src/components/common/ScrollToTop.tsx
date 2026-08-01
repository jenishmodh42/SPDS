import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};
