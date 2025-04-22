import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

type TranslationKeys = {
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    contactMe: string;
    myExperience: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    personalInfo: string;
    nationality: string;
    residence: string;
    gender: string;
    languages: string;
    chineseMandarin: string;
    english: string;
    personalBlog: string;
    exploreMore: string;
    visitBlog: string;
    creativeProjects: string;
  };
  experience: {
    title: string;
    subtitle: string;
    tools: string;
    role: string;
    earlierProjects: string;
    showMore: string;
    showLess: string;
  };
  education: {
    title: string;
    degree: string;
    university: string;
    period: string;
  };
  skills: {
    title: string;
    overview: string;
    programming: string;
    networking: string;
    cloud: string;
    ai: string;
    tools: string;
    languages: string;
    frameworks: string;
    databases: string;
    devops: string;
    softSkills: string;
    more: string;
    less: string;
  };
  projects: {
    title: string;
    explore: string;
    musicProduction: string;
    photography: string;
    audioSoftware: string;
    creativeArts: string;
    visualArts: string;
    technical: string;
  };
  contact: {
    title: string;
    getInTouch: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    wechatTitle: string;
    wechatDescription: string;
    messageTitle: string;
    messageDescription: string;
    visitBlog: string;
  };
  footer: {
    copyright: string;
  };
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    hero: {
      greeting: "Hello, I'm",
      name: "Feilong Sun",
      title: "Network Engineer & Creative Technologist",
      description: "Specialized in LTE/NR infrastructure, AI/ML applications, and cloud-native environments. Passionate about solving complex problems and creating innovative solutions.",
      contactMe: "Contact Me",
      myExperience: "My Experience"
    },
    about: {
      title: "About Me",
      subtitle: "Network Engineer & Creative Technologist",
      description1: "I am a Network Engineer with over a decade of experience specializing in LTE/NR infrastructure, AI/ML applications, and cloud-native environments. My professional focus has been on optimizing network performance and implementing cutting-edge solutions for telecommunications infrastructure.",
      description2: "Beyond my technical work, I pursue creative projects in music production and photography, publishing original music and maintaining a personal photography gallery. I'm passionate about merging technical expertise with creative expression to solve complex problems.",
      personalInfo: "Personal Information",
      nationality: "Nationality:",
      residence: "Residence:",
      gender: "Gender:",
      languages: "Languages",
      chineseMandarin: "Chinese Mandarin",
      english: "English",
      personalBlog: "Personal Blog",
      exploreMore: "Explore more about my projects, writings, and creative endeavors on my personal blog.",
      visitBlog: "Visit Blog",
      creativeProjects: "Creative Projects"
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Ericsson (Xi'an) ICT Services Co., Ltd. — Network Engineer (JS5)",
      tools: "Tools:",
      role: "Role:",
      earlierProjects: "Earlier Projects",
      showMore: "Show More",
      showLess: "Show Less"
    },
    education: {
      title: "Education",
      degree: "B.S. in Communication Engineering",
      university: "Xi'an Technological University",
      period: "Sep 2010 – May 2013"
    },
    skills: {
      title: "Technical Skills",
      overview: "Skills Overview",
      programming: "Programming",
      networking: "Networking",
      cloud: "Cloud",
      ai: "AI",
      tools: "Tools",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      devops: "DevOps",
      softSkills: "Soft Skills",
      more: "More",
      less: "Less"
    },
    projects: {
      title: "Creative & Personal Projects",
      explore: "Explore",
      musicProduction: "Music Production",
      photography: "Photography",
      audioSoftware: "Audio Software",
      creativeArts: "Creative Arts",
      visualArts: "Visual Arts",
      technical: "Technical"
    },
    contact: {
      title: "Contact",
      getInTouch: "Get in touch",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      wechatTitle: "WeChat",
      wechatDescription: "Scan the QR code to add me on WeChat",
      messageTitle: "Let's Build Beautiful Things Together😄",
      messageDescription: "Whether you're interested in discussing telecommunications, AI/ML applications, or creative collaborations in music or photography, I'm always open to connect and explore new opportunities.",
      visitBlog: "Visit my blog"
    },
    footer: {
      copyright: "© 2024 Feilong Sun. All rights reserved."
    }
  },
  zh: {
    hero: {
      greeting: "您好，我是",
      name: "孙飞龙",
      title: "网络工程师 & 创意技术专家",
      description: "专注于LTE/NR基础设施、AI/ML应用和云原生环境。热衷于解决复杂问题并创造创新解决方案。",
      contactMe: "联系我",
      myExperience: "我的经验"
    },
    about: {
      title: "关于我",
      subtitle: "网络工程师 & 创意技术专家",
      description1: "我是一名拥有十多年经验的网络工程师，专注于LTE/NR基础设施、AI/ML应用和云原生环境。我的专业重点是优化网络性能并为电信基础设施实施尖端解决方案。",
      description2: "除了技术工作，我还从事音乐制作和摄影等创意项目，发布原创音乐并维护个人摄影画廊。我热衷于将技术专长与创意表达相结合，解决复杂问题。",
      personalInfo: "个人信息",
      nationality: "国籍：",
      residence: "居住地：",
      gender: "性别：",
      languages: "语言",
      chineseMandarin: "中文普通话",
      english: "英语",
      personalBlog: "个人博客",
      exploreMore: "在我的个人博客上探索更多关于我的项目、文章和创意活动。",
      visitBlog: "访问博客",
      creativeProjects: "创意项目"
    },
    experience: {
      title: "职业经验",
      subtitle: "爱立信（西安）信息技术服务有限公司 — 网络工程师（JS5）",
      tools: "工具：",
      role: "角色：",
      earlierProjects: "早期项目",
      showMore: "显示更多",
      showLess: "收起"
    },
    education: {
      title: "教育背景",
      degree: "通信工程学士",
      university: "西安工业大学",
      period: "2010年9月 – 2013年5月"
    },
    skills: {
      title: "技术技能",
      overview: "技能概览",
      programming: "编程",
      networking: "网络",
      cloud: "云技术",
      ai: "人工智能",
      tools: "工具",
      languages: "语言",
      frameworks: "框架",
      databases: "数据库",
      devops: "DevOps",
      softSkills: "软技能",
      more: "查看更多",
      less: "收起"
    },
    projects: {
      title: "创意与个人项目",
      explore: "探索",
      musicProduction: "音乐制作",
      photography: "摄影",
      audioSoftware: "音频软件",
      creativeArts: "创意艺术",
      visualArts: "视觉艺术",
      technical: "技术"
    },
    contact: {
      title: "联系方式",
      getInTouch: "与我联系",
      name: "姓名",
      email: "电子邮件",
      phone: "电话",
      message: "留言",
      send: "发送消息",
      wechatTitle: "微信",
      wechatDescription: "扫描二维码添加我的微信",
      messageTitle: "让我们一起创造美好😄",
      messageDescription: "无论您是想讨论电信、AI/ML应用，还是音乐或摄影方面的创意合作，我都乐于与您联系并探索新的机会。",
      visitBlog: "访问我的博客"
    },
    footer: {
      copyright: "© 2024 孙飞龙。保留所有权利。"
    }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (section: keyof TranslationKeys, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // Check for user preferences
    const savedLanguage = localStorage.getItem('language') as Language | null;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('language', language);
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = (section: keyof TranslationKeys, key: string) => {
    try {
      const sectionData = translations[language][section] as Record<string, string>;
      return sectionData[key] || key;
    } catch (error) {
      console.error(`Translation not found for ${section}.${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
