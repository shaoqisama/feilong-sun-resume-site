
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

      // Clone the body to modify it for PDF
      const element = document.body.cloneNode(true) as HTMLElement;
      
      // Remove elements we don't want in the PDF
      const elementsToRemove = element.querySelectorAll(
        'nav, footer, button, #contact, .DownloadButton'
      );
      elementsToRemove.forEach(el => el.parentNode?.removeChild(el));

      // Configure PDF options
      const options = {
        margin: 10,
        filename: `Feilong_Sun_CV_${language === 'en' ? 'English' : 'Chinese'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Generate PDF
      await html2pdf().from(element).set(options).save();
      
      toast({
        title: language === 'en' ? 'PDF Generated Successfully' : 'PDF生成成功',
        description: language === 'en' ? 'Your CV has been downloaded' : '您的简历已下载',
        variant: 'success',
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
