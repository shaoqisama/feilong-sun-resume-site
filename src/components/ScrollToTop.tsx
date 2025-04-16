
import { useEffect } from 'react';
import { animateSkillBars, animateTimeline } from '@/utils/animations';

const ScrollToTop = () => {
  useEffect(() => {
    // Function to animate elements when they enter the viewport
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('fade-in');
        }
      });
      
      // Animate skill bars when in viewport
      animateSkillBars();
      
      // Animate timeline items
      animateTimeline();
    };
    
    // Smooth scrolling for anchor links
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        if (!id) return;
        
        const element = document.querySelector(id);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Initial check
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Add click event listener for smooth scrolling
    document.addEventListener('click', smoothScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      document.removeEventListener('click', smoothScroll);
    };
  }, []);
  
  return null;
};

export default ScrollToTop;
