"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { translations } from "@/lib/translations";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, textZh: string, textEn: string) => string;
  tByKey: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 从浏览器本地存储读取语言设置，如果没有则使用浏览器语言或默认值
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'zh' || savedLanguage === 'en') {
      return savedLanguage;
    }
    
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('zh')) {
      return 'zh';
    }
  }
  
  return 'en'; // 默认语言为英文
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh'); // 默认值，会在useEffect中更新
  
  // 在客户端加载后设置语言
  useEffect(() => {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
  }, []);
  
  // 当语言变化时，保存到本地存储
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // 简单的翻译函数，根据当前语言返回对应文本
  const t = (key: string, textZh: string, textEn: string): string => {
    return language === "zh" ? textZh : textEn;
  };
  
  // 通过键从翻译文件中获取文本
  const tByKey = (section: string, key: string): string => {
    try {
      // @ts-ignore - 我们知道这个访问路径可能不存在
      const translationObj = translations[section][key];
      if (translationObj && translationObj[language]) {
        return translationObj[language];
      }
      
      // 如果找不到翻译，返回键名
      return key;
    } catch (error) {
      console.warn(`Translation not found for ${section}.${key}`);
      return key;
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tByKey }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
