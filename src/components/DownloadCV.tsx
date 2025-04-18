
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

      // First, create a container to hold our CV content
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.maxWidth = '210mm'; // A4 width
      container.style.margin = '0 auto';
      container.style.padding = '20px';
      container.style.backgroundColor = 'white';
      container.style.color = 'black';
      
      // Clone only the specific sections we want in our CV
      const sections = ['hero', 'about', 'experience', 'education', 'skills'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const clone = section.cloneNode(true) as HTMLElement;
          
          // Remove any interactive elements
          const elementsToRemove = clone.querySelectorAll('button, a[href="#"], .CollapsibleTrigger');
          elementsToRemove.forEach(el => el.parentNode?.removeChild(el));
          
          // Expand all collapsible contents for PDF
          const collapsibleContents = clone.querySelectorAll('.CollapsibleContent');
          collapsibleContents.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.display = 'block';
              el.style.height = 'auto';
              el.style.overflow = 'visible';
            }
          });
          
          container.appendChild(clone);
        }
      }

      // Add a footer with contact information
      const footer = document.createElement('div');
      footer.style.marginTop = '20px';
      footer.style.padding = '10px';
      footer.style.borderTop = '1px solid #eee';
      footer.style.textAlign = 'center';
      footer.style.fontSize = '0.8rem';
      footer.innerHTML = `
        <p>Email: contact@example.com | Visit: <a href="https://shaoqisama.github.io">shaoqisama.github.io</a></p>
      `;
      container.appendChild(footer);
      
      // Temporarily add to document for conversion (will be hidden)
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      document.body.appendChild(container);
      
      // Configure PDF options with better quality settings
      const options = {
        margin: [10, 10, 10, 10],
        filename: `Feilong_Sun_CV_${language === 'en' ? 'English' : 'Chinese'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          letterRendering: true,
          allowTaint: true,
          foreignObjectRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true,
          precision: 16
        }
      };

      // Generate and download PDF
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
