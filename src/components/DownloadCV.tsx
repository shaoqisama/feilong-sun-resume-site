import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export function DownloadCV() {
  const { language, t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (isGenerating) return;
    
    try {
      setIsGenerating(true);
      toast({
        title: language === 'en' ? 'Preparing CV for download' : '准备简历下载',
        description: language === 'en' ? 'Please wait...' : '请稍等...',
      });

      // Create a container for the print content
      const printContainer = document.createElement('div');
      printContainer.id = 'print-container';
      Object.assign(printContainer.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '9999',
        backgroundColor: 'white',
        padding: '20px',
        overflow: 'auto',
        boxSizing: 'border-box'
      });
      
      // Define the main sections to include in the CV
      const sectionsToInclude = [
        { id: 'about', selector: 'section#about' },
        { id: 'experience', selector: 'section#experience' },
        { id: 'education', selector: 'section#education' },
        { id: 'skills', selector: 'section#skills' },
        { id: 'creative-projects', selector: 'section#creative-projects' }
      ];
      
      // Create styled content wrapper
      const contentWrapper = document.createElement('div');
      Object.assign(contentWrapper.style, {
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        backgroundColor: 'white'
      });
      
      // Add name and title at the top
      const header = document.createElement('div');
      Object.assign(header.style, {
        textAlign: 'center',
        marginBottom: '20px'
      });
      
      header.innerHTML = `
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 8px;">Feilong Sun</h1>
        <h2 style="font-size: 18px; color: #666; margin-bottom: 16px;">
          ${language === 'en' ? 'Network Engineer & Creative Technologist' : '网络工程师 & 创意技术师'}
        </h2>
        <div style="height: 2px; width: 100px; background: linear-gradient(to right, #3b82f6, #8b5cf6); margin: 0 auto 16px;"></div>
      `;
      contentWrapper.appendChild(header);
      
      // Add print instructions
      const printInstructions = document.createElement('div');
      Object.assign(printInstructions.style, {
        padding: '15px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        color: '#555'
      });
      printInstructions.className = 'print-instructions no-print';
      printInstructions.innerHTML = `
        <p>${language === 'en' ? 'To download as PDF, use the browser\'s print function (Ctrl+P / ⌘+P).' : '要下载为PDF，请使用浏览器的打印功能 (Ctrl+P / ⌘+P)。'}</p>
        <p>${language === 'en' ? 'Select "Save as PDF" as the destination.' : '选择"另存为PDF"作为目标。'}</p>
        <button id="close-print-view" style="padding: 8px 16px; background-color: #f43f5e; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">
          ${language === 'en' ? 'Close Print View' : '关闭打印视图'}
        </button>
      `;
      contentWrapper.appendChild(printInstructions);
      
      // Clone each section
      for (const section of sectionsToInclude) {
        const originalSection = document.querySelector(section.selector);
        if (originalSection) {
          // Clone the section deeply
          const clonedSection = originalSection.cloneNode(true) as HTMLElement;
          
          // Fix heading styles
          const headings = clonedSection.querySelectorAll('h2');
          headings.forEach(h => {
            if (h instanceof HTMLElement) {
              Object.assign(h.style, {
                fontSize: '22px',
                fontWeight: 'bold',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '1px solid #eee'
              });
            }
          });
          
          // Create a section wrapper for better styling
          const sectionWrapper = document.createElement('div');
          Object.assign(sectionWrapper.style, {
            marginBottom: '30px'
          });
          
          // Process specific sections
          
          // For Experience section - expand all content
          if (section.id === 'experience') {
            // Find all collapsible content and make it visible
            const collapsibleContents = clonedSection.querySelectorAll('[role="region"], [data-state="closed"]');
            collapsibleContents.forEach(el => {
              if (el instanceof HTMLElement) {
                el.style.display = 'block';
                el.style.height = 'auto';
                el.style.overflow = 'visible';
                el.setAttribute('data-state', 'open');
              }
            });
            
            // Remove show more/less buttons and other controls
            const buttons = clonedSection.querySelectorAll('button, [role="button"]');
            buttons.forEach(button => {
              const parent = button.parentNode;
              if (parent) parent.removeChild(button);
            });
          }
          
          // For Skills section - expand all skills
          if (section.id === 'skills') {
            // Force all collapsibles open
            const skillContents = clonedSection.querySelectorAll('[role="region"], [data-state="closed"]');
            skillContents.forEach(el => {
              if (el instanceof HTMLElement) {
                el.style.display = 'block';
                el.style.height = 'auto';
                el.style.overflow = 'visible';
                el.setAttribute('data-state', 'open');
              }
            });
            
            // Fix progress bars
            const progressBars = clonedSection.querySelectorAll('[role="progressbar"]');
            progressBars.forEach(bar => {
              if (bar instanceof HTMLElement) {
                bar.style.height = '10px';
                bar.style.backgroundColor = '#e2e8f0';
                bar.style.borderRadius = '5px';
                bar.style.overflow = 'hidden';
                
                // Create a visible indicator if needed
                const value = bar.getAttribute('aria-valuenow') || '0';
                const valueNum = parseInt(value);
                
                // Check if indicator exists
                let indicator = bar.querySelector('div');
                if (!indicator) {
                  indicator = document.createElement('div');
                  bar.appendChild(indicator);
                }
                
                if (indicator instanceof HTMLElement) {
                  Object.assign(indicator.style, {
                    width: `${valueNum}%`,
                    height: '100%',
                    backgroundColor: '#6366f1',
                    borderRadius: '5px'
                  });
                }
              }
            });
            
            // Remove interactive elements
            const triggers = clonedSection.querySelectorAll('[aria-controls]');
            triggers.forEach(trigger => {
              // Make non-interactive but keep visible
              if (trigger instanceof HTMLElement) {
                trigger.style.cursor = 'default';
                trigger.removeAttribute('aria-controls');
              }
            });
          }
          
          // Remove all interactive elements and unnecessary styling
          const interactiveElements = clonedSection.querySelectorAll('button, a[href="#"]');
          interactiveElements.forEach(el => {
            const parent = el.parentNode;
            if (parent) parent.removeChild(el);
          });
          
          // Clean up classes that might affect printing
          const allElements = clonedSection.querySelectorAll('*');
          allElements.forEach(el => {
            if (el.classList.contains('animate-on-scroll') || 
                el.classList.contains('fade-in')) {
              el.classList.remove('animate-on-scroll', 'fade-in');
            }
            
            // Clean up any dark mode related classes
            if (el.classList.contains('dark')) {
              el.classList.remove('dark');
            }
          });
          
          // Style cards consistently
          const cards = clonedSection.querySelectorAll('.glass-card, .card-hover');
          cards.forEach(card => {
            if (card instanceof HTMLElement) {
              Object.assign(card.style, {
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
              });
            }
          });
          
          // Add to section wrapper
          sectionWrapper.appendChild(clonedSection);
          contentWrapper.appendChild(sectionWrapper);
          
          // Add divider between sections
          const divider = document.createElement('hr');
          Object.assign(divider.style, {
            margin: '20px 0',
            border: 'none',
            borderTop: '1px solid #eee'
          });
          contentWrapper.appendChild(divider);
        }
      }
      
      // Add contact information
      const footer = document.createElement('div');
      Object.assign(footer.style, {
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        borderTop: '1px solid #eee',
        fontSize: '12px'
      });
      footer.innerHTML = `
        <p>Email: contact@example.com | Visit: <a href="https://shaoqisama.github.io" style="color: #3b82f6; text-decoration: none;">shaoqisama.github.io</a></p>
      `;
      contentWrapper.appendChild(footer);
      
      // Add print styles
      const printStyles = document.createElement('style');
      printStyles.textContent = `
        @media print {
          body * {
            visibility: hidden;
          }
          #print-container, #print-container * {
            visibility: visible;
          }
          .no-print {
            display: none !important;
          }
          #print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            padding: 0;
            margin: 0;
          }
          @page {
            size: A4;
            margin: 1cm;
          }
          [role="progressbar"] > div {
            background-color: #6366f1 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          [role="progressbar"] {
            background-color: #e2e8f0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `;
      
      // Add container and styles to document
      printContainer.appendChild(contentWrapper);
      document.head.appendChild(printStyles);
      document.body.appendChild(printContainer);
      
      // Handle close button click
      const closeButton = document.getElementById('close-print-view');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          document.body.removeChild(printContainer);
          document.head.removeChild(printStyles);
          setIsGenerating(false);
        });
      }
      
      // Delay slightly to ensure rendering is complete
      setTimeout(() => {
        // Notify user
        toast({
          title: language === 'en' ? 'Ready to save as PDF' : '准备另存为PDF',
          description: language === 'en' ? 'Use your browser\'s print function to save as PDF' : '使用浏览器的打印功能另存为PDF',
          duration: 5000,
        });
        
        // Automatically open print dialog
        window.print();
        
        // Set state to false after printing
        setIsGenerating(false);
      }, 500);
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: language === 'en' ? 'Error Preparing CV' : '准备简历时出错',
        description: language === 'en' ? 'Please try again later' : '请稍后再试',
        variant: 'destructive',
      });
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="DownloadButton flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary border-primary/20"
      onClick={generatePDF}
      disabled={isGenerating}
    >
      <Download size={16} />
      {language === 'en' ? 'Download CV' : '下载简历'}
    </Button>
  );
}
