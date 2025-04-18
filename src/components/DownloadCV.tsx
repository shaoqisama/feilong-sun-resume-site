
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import html2pdf from 'html2pdf.js';

export function DownloadCV() {
  const { language, t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (isGenerating) return;
    
    try {
      setIsGenerating(true);
      toast({
        title: language === 'en' ? 'Generating PDF' : '正在生成PDF',
        description: language === 'en' ? 'Please wait...' : '请稍等...',
      });

      // Create a container for the PDF content
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.maxWidth = '210mm'; // A4 width
      container.style.margin = '0 auto';
      container.style.padding = '20px';
      container.style.backgroundColor = 'white';
      container.style.color = 'black';
      
      // Define the main sections to include in the CV
      const sectionsToInclude = [
        { id: 'about', selector: 'section#about' },
        { id: 'experience', selector: 'section#experience' },
        { id: 'education', selector: 'section#education' },
        { id: 'skills', selector: 'section#skills' },
        { id: 'creative-projects', selector: 'section#creative-projects' }
      ];
      
      // Add name and title at the top
      const header = document.createElement('div');
      header.style.textAlign = 'center';
      header.style.marginBottom = '20px';
      header.innerHTML = `
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 8px;">Feilong Sun</h1>
        <h2 style="font-size: 18px; color: #666; margin-bottom: 16px;">
          ${language === 'en' ? 'Network Engineer & Creative Technologist' : '网络工程师 & 创意技术师'}
        </h2>
        <div style="height: 2px; width: 100px; background: linear-gradient(to right, #3b82f6, #8b5cf6); margin: 0 auto 16px;"></div>
      `;
      container.appendChild(header);
      
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
              h.style.fontSize = '22px';
              h.style.fontWeight = 'bold';
              h.style.marginBottom = '16px';
              h.style.paddingBottom = '8px';
              h.style.borderBottom = '1px solid #eee';
            }
          });
          
          // Remove interactive elements
          const toRemove = clonedSection.querySelectorAll('button, a[href="#"], .CollapsibleTrigger');
          toRemove.forEach(el => el.parentNode?.removeChild(el));
          
          // Ensure collapsible content is visible
          const collapsibles = clonedSection.querySelectorAll('.CollapsibleContent');
          collapsibles.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.display = 'block';
              el.style.height = 'auto';
              el.style.overflow = 'visible';
            }
          });
          
          // Clean up unnecessary classes that might affect styling
          const elements = clonedSection.querySelectorAll('*');
          elements.forEach(el => {
            if (el.classList.contains('animate-on-scroll') || 
                el.classList.contains('fade-in')) {
              el.classList.remove('animate-on-scroll', 'fade-in');
            }
          });
          
          // Add to container
          container.appendChild(clonedSection);
          
          // Add spacing between sections
          container.appendChild(document.createElement('hr'));
        }
      }
      
      // Contact information footer
      const footer = document.createElement('div');
      footer.style.marginTop = '20px';
      footer.style.padding = '10px';
      footer.style.borderTop = '1px solid #eee';
      footer.style.textAlign = 'center';
      footer.style.fontSize = '12px';
      footer.innerHTML = `
        <p>Email: contact@example.com | Visit: <a href="https://shaoqisama.github.io">shaoqisama.github.io</a></p>
      `;
      container.appendChild(footer);
      
      // Add container to document (hidden) for conversion
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '-9999px';
      container.style.width = '210mm'; // A4 width
      container.style.zIndex = '-1000';
      document.body.appendChild(container);
      
      // Configure PDF options with optimized settings
      const options = {
        margin: [10, 10, 10, 10],
        filename: `Feilong_Sun_CV_${language === 'en' ? 'English' : 'Chinese'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: true,
          letterRendering: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true,
          precision: 16
        }
      };

      // Generate PDF
      await html2pdf().from(container).set(options).save();
      
      // Clean up
      document.body.removeChild(container);
      
      toast({
        title: language === 'en' ? 'PDF Generated Successfully' : 'PDF生成成功',
        description: language === 'en' ? 'Your CV has been downloaded' : '您的简历已下载',
        variant: "default",
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: language === 'en' ? 'Error Generating PDF' : 'PDF生成错误',
        description: language === 'en' ? 'Please try again later' : '请稍后再试',
        variant: 'destructive',
      });
    } finally {
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
