"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {  const { t, tByKey } = useLanguage();
  
  return (
    <section className={`relative flex flex-col md:flex-row items-center justify-between gap-16 mb-32 py-16 px-4 rounded-3xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 rounded-full bg-secondary/20 filter blur-3xl pointer-events-none"></div>      <div className="flex-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent drop-shadow tracking-tight leading-tight">
            {tByKey("home", "name")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90 drop-shadow-sm">
            {tByKey("home", "title")}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed max-w-2xl backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-border/50 shadow-sm">
            {tByKey("home", "intro")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm px-8 py-2 text-base font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            {t("learnMore", "了解更多", "Learn More")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 py-2 text-base font-medium text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
            </svg>
            {t("contactMe", "联系我", "Contact Me")}
          </Link>
        </motion.div>
      </div>
        {/* 个人头像/图片区域 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="relative flex-shrink-0 z-10"
      >
        <div className="w-80 h-80 md:w-96 md:h-96 relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 dark:border-black/30 glassmorphism rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 mix-blend-multiply animate-pulse" />
          <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-secondary/30 filter blur-2xl"></div>
          <div className="absolute -top-2 -left-2 w-24 h-24 rounded-full bg-primary/30 filter blur-2xl"></div>
          <div className="flex items-center justify-center h-full bg-gradient-to-tr from-background/90 to-background/70 text-9xl backdrop-blur-sm">
            👨‍🎓
          </div>
          
          {/* 装饰图案 */}
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border-4 border-dotted border-secondary/30 animate-ping opacity-70"></div>
        </div>
      </motion.div>
    </section>
  );
}
