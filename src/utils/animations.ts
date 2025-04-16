
// A simple function to add typewriter effect to a text element
export function typeWriter(
  element: HTMLElement,
  text: string,
  speed: number = 50,
  delay: number = 0
): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = '';
    
    setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    }, delay);
  });
}

// A function to check if an element is in viewport
export function isElementInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// A function to animate skill bars when they enter the viewport
export function animateSkillBars(): void {
  const skillBars = document.querySelectorAll('.skill-progress') as NodeListOf<HTMLElement>;
  
  skillBars.forEach((bar) => {
    const parent = bar.parentElement;
    if (!parent) return;
    
    if (isElementInViewport(parent)) {
      const width = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
}

// Animation for timeline elements
export function animateTimeline(): void {
  const timelineItems = document.querySelectorAll('.timeline-item') as NodeListOf<HTMLElement>;
  
  timelineItems.forEach((item, index) => {
    if (isElementInViewport(item)) {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 150);
    }
  });
}
